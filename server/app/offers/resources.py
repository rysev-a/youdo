from flask_restful import Resource, fields, marshal
from flask import request, jsonify

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
    'customer': fields.Nested(user_fields),
    'messages': fields.List(fields.Nested(message_fields))
}


# Offer API
class OfferList(Resource):
    def get(self):
        return marshal(Offer.query.all(), offer_fields)

    def post(self):
        # get first message data
        message_content = request.json.get('message')
        message_sender = request.json.get('customer_id')

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
