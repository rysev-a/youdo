import json
from flask import jsonify
from flask_restful import (Resource, marshal,
                           fields, request, reqparse)


from ..database import db
from ..notifications.signals import create_notification
from ..tasks.models import Task
from .models import Offer, Message
from .forms import OfferForm


user_fields = {
    'id': fields.Integer,
    'email': fields.String,
    'first_name': fields.String
}

message_fields = {
    'id': fields.Integer,
    'sender': fields.Nested(user_fields),
    'content': fields.String
}

offer_fields = {
    'id': fields.Integer,
    'executor': fields.Nested(user_fields),
    'messages': fields.List(fields.Nested(message_fields)),
    'task_id': fields.Integer,
    'price': fields.Integer,
    'status': fields.String
}

import time
def processing(func):
    def decorator(*args, **kwargs):
        #time.sleep(3)
        return func(*args, **kwargs)
    return decorator


# Offer API
class OfferList(Resource):
    method_decorators = [processing]

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('task', type=int)
        args = parser.parse_args()
        task = args.get('task')

        offers = Offer.query
        if task:
            offers = offers.filter_by(task_id=task)

        return marshal(offers.all(), offer_fields)

    def post(self):
        # get first message data
        message_content = request.json.get('message')
        message_sender = request.json.get('executor_id')

        # clear offer data
        del request.json['message']

        form = OfferForm(**request.json)
        if not form.validate():
            response = jsonify(form.errors)
            response.status_code = 400
            return response

        offer = Offer(**request.json)
        db.session.add(offer)
        db.session.commit()

        message = Message(
            content=message_content,
            sender_id=message_sender,
            offer_id=offer.id
        )

        db.session.add(message)
        db.session.commit()

        task = Task.query.get(request.json.get('task_id'))

        create_notification.send(
            task_id=task.id,
            user_id=task.customer_id,
            content='Запрос на выполнение задачи'
        )

        return marshal(offer, offer_fields)


class OfferAccept(Resource):
    def post(self, id):
        # send message
        message = Message(**request.json.get('message'))
        db.session.add(message)

        # update offer
        offer = Offer.query.get(id)
        offer.status = 'accepted'
        offer.task.status = 'accepted'
        db.session.commit()

        create_notification.send(
            task_id=offer.task.id,
            user_id=offer.executor_id,
            content='Одобрение запроса на выполнение задачи'
        )

        return marshal(offer, offer_fields), 200


class OfferConfirm(Resource):
    def post(self, id):
        # send message
        message = Message(**request.json.get('message'))
        db.session.add(message)

        # update offer
        offer = Offer.query.get(id)
        offer.status = 'running'

        # update task
        offer.task.status = 'running'
        offer.task.executor_id = offer.executor.id
        db.session.commit()

        # send notification
        create_notification.send(
            task_id=offer.task.id,
            user_id=offer.task.customer_id,
            content='Исполнитель приступил к выполнению задачи'
        )

        return marshal(offer, offer_fields), 200

class OfferComplete(Resource):
    def post(self, id):
        # send message
        message = Message(**request.json.get('message'))
        db.session.add(message)

        # update offer
        offer = Offer.query.get(id)
        offer.status = 'completed'
        offer.task.status = 'completed'
        db.session.commit()

        create_notification.send(
            task_id=offer.task.id,
            user_id=offer.task.customer_id,
            content='Ваша задача выполнена'
        )

        return marshal(offer, offer_fields), 200
