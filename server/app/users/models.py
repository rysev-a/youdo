from sqlalchemy.ext.hybrid import hybrid_property
from ..database import db
from ..bcrypt import bcrypt


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(length=100), unique=True)
    _password = db.Column('password', db.String(255))

    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, password):
        self._password = bcrypt.generate_password_hash(password).decode("utf-8")

    def __repr__(self):
        return self.email

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return str(self.id)
