from ..api import api
from .resources import (
    TaskList,
    TaskItem,
    TaskCategoryList
)


# Task API
api.add_resource(TaskList, '/api/v1/tasks')
api.add_resource(TaskItem, '/api/v1/tasks/<int:id>')

# TaskCategory API
api.add_resource(TaskCategoryList, '/api/v1/tasks/categories')
