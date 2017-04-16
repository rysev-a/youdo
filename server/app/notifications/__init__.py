from ..api import api
from .resources import (
    NotificationList,
    NotificationItem
)

api.add_resource(NotificationList, '/api/v1/notifications')
api.add_resource(NotificationItem, '/api/v1/notifications/<int:id>')


from .signals import connect_handlers
connect_handlers()
