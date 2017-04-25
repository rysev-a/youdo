from sqlalchemy.orm import relationship
from ..database import db


class Offer(db.Model):
    __tablename__ = 'offers'

    id = db.Column(db.Integer, primary_key=True)
    executor_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    executor = db.relationship('User')
    task_id = db.Column(db.Integer, db.ForeignKey('tasks.id'))
    task = db.relationship('Task')
    price = db.Column(db.Integer, default=0)
    status = db.Column(db.String(length=10), default='waiting')
    messages = relationship("Message")


class Message(db.Model):
    __tablename__ = 'messages'

    id = db.Column(db.Integer, primary_key=True)
    offer_id = db.Column(db.Integer, db.ForeignKey('offers.id', ondelete="CASCADE"))
    offer = db.relationship('Offer')
    sender_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    sender = db.relationship('User')
    content = db.Column(db.String(length=500))

'''
offer statuses:
  waiting
  choising
  accepted
  running
  completed
  failed
'''
