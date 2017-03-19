from flask_migrate import MigrateCommand
from flask_script import Manager
from app import create_app
from app.database import db
from app.users.cli import user_manager


manager = Manager(create_app('app.settings'))
manager.add_command('user', user_manager)

@manager.command
def initdb():
    db.create_all()

def dropdb():
    db.drop_all()


if __name__ == "__main__":
    manager.add_command('db', MigrateCommand)
    manager.run()
