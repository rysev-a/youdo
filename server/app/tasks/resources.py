from flask_restful import Resource, reqparse, fields, marshal
from flask import request, jsonify, json

from .models import Task, TaskCategory
from ..users.models import User
from ..database import db


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
    'customer_id': fields.String,
    'executor_id': fields.String,
    'category': fields.Nested(task_category_fields)
}



#Tasks API
class TaskList(Resource):
    def get(self):
        tasks = Task.query.all()
        return marshal(tasks, task_fields)

    def post(self):
        data = request.json
        task = Task(**data)
        db.session.add(task)
        db.session.commit()
        return marshal(task, task_fields)


class TaskItem(Resource):
    def get(self, task_id):
        task = Task.query.get(task_id)
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

