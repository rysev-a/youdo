from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import relationship
from ..database import db
from ..bcrypt import bcrypt


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(length=100))
    last_name = db.Column(db.String(length=100))
    email = db.Column(db.String(length=100), unique=True)
    _password = db.Column('password', db.String(255))
    created_tasks = relationship("Task", 
            primaryjoin="User.id==Task.customer_id")
    executed_tasks = relationship("Task", 
            primaryjoin="User.id==Task.executor_id")


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
