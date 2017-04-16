import math
from flask_restful import Resource, reqparse, fields, marshal
from flask import request, jsonify

from ..database import db
from .models import Notification
from .forms import NotificationForm


notification_fields = {
    'id': fields.Integer,
    'status': fields.String,
    'content': fields.String,
    'user_id': fields.Integer,
    'task_id': fields.Integer,
    'create_datetime': fields.DateTime
}


def processing(func):
    def decorator(*args, **kwargs):
        # time.sleep(3)
        return func(*args, **kwargs)

    return decorator


class NotificationList(Resource):
    method_decorators = [processing]

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('user', type=int)
        parser.add_argument('page', type=int)

        args = parser.parse_args()
        user = args.get('user')
        page = args.get('page')

        per_page = 7
        notification_count = Notification.query.filter_by(user_id=user).count()
        page_count = math.ceil(notification_count / per_page)

        notifications = Notification.query.filter_by(user_id=user, status='new')

        # apply pagination
        if page:
            notifications = notifications.limit(per_page).offset((page - 1) * per_page)

        return {
                   'data': marshal(notifications.all(), notification_fields),
                   'page': page,
                   'page_count': page_count
               }, 200

    def post(self):
        form = NotificationForm(**request.json)
        if not form.validate():
            response = jsonify(form.errors)
            response.status_code = 400
            return response

        notification = Notification(**request.json)
        db.session.add(notification)
        db.session.commit()
        return marshal(notification, notification_fields)


class NotificationItem(Resource):
    method_decorators = [processing]

    def get(self, id):
        notification = Notification.query.get(id)
        if not notification:
            return {'message': 'not found'}, 400

        notification_fields.update({
            'customer': fields.Nested(notification_fields)
        })

        return marshal(notification, notification_fields), 200

    def put(self, id):
        data = request.json
        notification = Notification.query.filter_by(id=id)
        notification.update(data)
        db.session.commit()
        return marshal(notification.one(), notification_fields), 200

    def delete(self, notification_id):
        notification = Notification.query.get(notification_id)
        notification.declared = []
        db.session.delete(notification)
        db.session.commit()
        return {'message': 'deletion complete'}, 200
