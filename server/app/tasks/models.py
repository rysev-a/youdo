from datetime import datetime
from ..database import db


class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(length=500))
    category_id = db.Column(db.Integer, db.ForeignKey('task_categories.id'))
    category = db.relationship('TaskCategory')
    customer_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    customer = db.relationship('User', foreign_keys=[customer_id])    
    executor_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    executor = db.relationship('User', foreign_keys=[executor_id])
    description = db.Column(db.String(length=500))
    status = db.Column(db.String(length=10), default='waiting')
    price = db.Column(db.Integer, default=0)
    create_datetime = db.Column(db.DateTime, default=datetime.utcnow)


class TaskCategory(db.Model):
    __tablename__ = 'task_categories'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(length=500))

    def __str__(self):
        return self.title
