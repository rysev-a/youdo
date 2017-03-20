from flask import jsonify
from flask_restful import (Resource, marshal,
                           fields, request, reqparse)
from flask_login import current_user, login_user, logout_user
from ..bcrypt import bcrypt
from ..database import db
from .models import User
from .forms import UserForm



user_fields = {
    'id': fields.Integer,
    'email': fields.String,
    'first_name': fields.String,
    'last_name': fields.String
}

profile_fields = {
    'id': fields.Integer,
    'email': fields.String,
    'first_name': fields.String,
    'last_name': fields.String,
    'is_authenticated': fields.Boolean
}

class UserList(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('page', type=int)
        args = parser.parse_args()
        users = User.query.paginate(args.get('page'), 10)
        return {
            'list': marshal(users.items, user_fields),
            'page': users.page,
            'pages': users.pages
        }

    def post(self):
        form = UserForm(**request.json)
        if not form.validate():
            response = jsonify(form.errors)
            response.status_code = 400
            return response

        user = User(**request.json)
        db.session.add(user)
        db.session.commit()

        return marshal(user, user_fields), 201


class UserItem(Resource):
    def get(self, id):
        user = User.query.get(id)
        return marshal(user, user_fields)

    def put(self, id):
        user = User.query.filter_by(id=id).update(request.json)
        db.session.commit()
        return marshal(user, user_fields)

    def delete(self, id):
        User.query.filter_by(id=id).delete()
        db.session.commit()
        return {'status': 'success'}


class ProfileLogin(Resource):
    def post(self):
        email = request.json.get('email')
        password = request.json.get('password')

        user = User.query.filter_by(email=email).first()
        if not user:
            return {'email': 'Еmail not found.'}, 400

        if not bcrypt.check_password_hash(user.password, password):
            return {'password': 'Invalid password.'}, 400

        login_user(user)
        return marshal(user, profile_fields)


class ProfileCurrent(Resource):
    def get(self):
        if not current_user.is_authenticated:
            return {'error': 'authorization required'}, 400
        
        return marshal(current_user, profile_fields), 200       


class ProfileLogout(Resource):
    def post(self):
        logout_user()
        return {'message': 'logout success'}, 200    


class ProfileRegister(Resource):
    def post(self):
        data = request.json
        form = UserForm(**data)

        if not form.validate():
            response = jsonify(form.errors)
            response.status_code = 400
            return response

        user = User(**data)
        db.session.add(user)
        db.session.commit()
        login_user(user, remember=True)

        return marshal(user, profile_fields), 200


class ProfileEdit(Resource):
    def post(self):
        print(current_user.first_name)
        user = User.query.filter_by(id=current_user.id)
        user.update(request.json)
        db.session.commit()
        return marshal(current_user, user_fields)
