import math
import time
from flask_restful import Resource, reqparse, fields, marshal
from flask import request, jsonify, json


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
    'category': fields.Nested(task_category_fields),
    'create_datetime': fields.DateTime
}


def processing(func):
    def decorator(*args, **kwargs):
        # time.sleep(3)
        return func(*args, **kwargs)
    return decorator


# Tasks API
class TaskList(Resource):
    method_decorators = [processing]
    def get(self):
        per_page = 10

        parser = reqparse.RequestParser()
        parser.add_argument('page', type=int)
        parser.add_argument('sort', type=str)
        parser.add_argument('filter', type=str)

        args = parser.parse_args()
        page = args.get('page')
        sort = args.get('sort')
        filter = args.get('filter')

        tasks = Task.query

        # apply sort
        if sort and json.loads(sort):
            sort = json.loads(sort)
            order_tempate = "{} {}".format(sort.get('type'), sort.get('order'))
            tasks = tasks.order_by(order_tempate)

        # apply filter
        if filter and json.loads(filter):
            tasks = self.apply_filter(tasks, filter)

        # get pagination data
        task_count = tasks.count()
        page_count = math.ceil(task_count / per_page)

        # apply pagination
        if page:
            tasks = tasks.limit(per_page).offset((page - 1) * per_page)

        return {
            'data': marshal(tasks.all(), task_fields),
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

    def apply_filter(self, tasks, filter):
        filter = json.loads(filter)
        for key in filter.keys():
            if key == 'statuses':
                tasks = self.apply_status_filter(tasks, filter['statuses'])
            else:
                tasks = tasks.filter_by(**{key: filter[key]})

        return tasks

    def apply_status_filter(self, tasks, statuses):
        return tasks.filter(Task.status.in_(tuple(statuses)))


class TaskItem(Resource):
    method_decorators = [processing]
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


# Categories API
class TaskCategoryList(Resource):
    def get(self):
        task_categories = TaskCategory.query.all()
        return marshal(task_categories, task_category_fields)

