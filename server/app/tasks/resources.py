import math
from flask_restful import Resource, reqparse, fields, marshal
from flask import request, jsonify, json

from ..users.models import User
from ..database import db
from .models import Task, TaskCategory
from .forms import TaskForm


user_fields = {
    'id': fields.Integer,
    'email': fields.String,
    'first_name': fields.String
}

task_category_fields = {
    'id': fields.Integer,
    'title': fields.String
}

task_fields = {
    'id': fields.Integer,
    'price': fields.Integer,
    'name': fields.String,
    'description': fields.String,
    'status': fields.String,
    'customer_id': fields.Integer,
    'executor_id': fields.Integer,
    'category': fields.Nested(task_category_fields)
}


#Tasks API
class TaskList(Resource):
    def get(self):
        per_page = 10
        task_count = Task.query.count()
        page_count = math.ceil(task_count / per_page)
        
        parser = reqparse.RequestParser()
        parser.add_argument('page', type=int)
        args = parser.parse_args()
        page = args.get('page')
        if page:
            tasks = Task.query.limit(per_page).offset((page - 1) * per_page).all()
        else:
            tasks = Task.query.all()
        return {
            'data': marshal(tasks, task_fields),
            'page': page,
            'page_count': page_count
        }, 200

    def post(self):
        form = TaskForm(**request.json)
        if not form.validate():
            response = jsonify(form.errors)
            response.status_code = 400
            return response

        task = Task(**request.json)
        db.session.add(task)
        db.session.commit()
        return marshal(task, task_fields)




class TaskItem(Resource):
    def get(self, id):
        task = Task.query.get(id)
        if not task:
            return {'message': 'not found'}, 400

        task_fields.update({
            'customer': fields.Nested(user_fields)
        })

        return marshal(task, task_fields), 200

    def put(self, task_id):
        data = request.json
        task = Task.query.filter_by(id=task_id)
        task.update(data)
        db.session.commit()
        return marshal(task.one(), task_fields), 200

    def delete(self, task_id):
        task = Task.query.get(task_id)
        task.declared = []
        db.session.delete(task)
        db.session.commit()
        return {'message': 'deletion complete'}, 200


#Categories API
class TaskCategoryList(Resource):
    def get(self):
        task_categories = TaskCategory.query.all()
        return marshal(task_categories, task_category_fields)

