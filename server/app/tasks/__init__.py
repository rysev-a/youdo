from ..api import api
from .resources import (
    TaskList,
    TaskItem
)

# Task API
api.add_resource(TaskList, '/api/v1/tasks')
api.add_resource(TaskItem, '/api/v1/tasks/<int:id>')

print('init tasks')
