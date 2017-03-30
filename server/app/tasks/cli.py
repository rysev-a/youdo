from flask_script import Manager
from .models import Task, TaskCategory
from ..database import db
from ..users.models import User
import yaml


task_manager = Manager()
@task_manager.command
def create_category(task_category_data):
    category = TaskCategory(**task_category_data)
    db.session.add(category)
    db.session.commit()

@task_manager.command
def create_task(task_data):
    task = Task(**task_data)
    db.session.add(task)
    db.session.commit()

@task_manager.command
def mock():
    Task.query.delete()
    TaskCategory.query.delete()
    db.session.commit()


    with open('app/tasks/mockup.yaml') as tasks:
        task_data = yaml.load(tasks)

    # create categories
    [create_category(data) 
        for data in task_data['task_categories']]


    # get category indexes
    categories = dict((category.title, category.id)
        for category in TaskCategory.query.all())


    for task in task_data['tasks']:
        task['category_id'] = categories[task['category']]
        task['customer_id'] = User.query.first().id
        del task['category']
        create_task(task)
