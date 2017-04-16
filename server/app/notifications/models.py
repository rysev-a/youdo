from datetime import datetime
from ..database import db


class Notification(db.Model):
    __tablename__ = 'notifications'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(length=500))
    status = db.Column(db.String(length=10), default='new')
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User')
    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'))
    task = db.relationship('Task')
    create_datetime = db.Column(db.DateTime, default=datetime.utcnow)

    def __str__(self):
        return self.content
