from flask import jsonify
from flask_restful import (Resource, marshal,
                           fields, request, reqparse)


from ..database import db
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
    'price': fields.Integer
}


# Offer API
class OfferList(Resource):
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

        return marshal(offer, offer_fields)
