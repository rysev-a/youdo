from ..signals import signals
from ..database import db
from .models import Notification
create_notification = signals.signal('create notification')


def create_notification_handler(*args, **kwargs):
    notification = Notification(**kwargs)
    db.session.add(notification)
    db.session.commit()


def connect_handlers():
    create_notification.connect(create_notification_handler)
