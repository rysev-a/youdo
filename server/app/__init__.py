from flask import Flask
from .database import db
from .bcrypt import bcrypt
from .authorization import login_manager
from .api import api


def create_app(settings):
    app = Flask(__name__)
    app.config.from_object(settings)
    db.init_app(app)
    bcrypt.init_app(app)
    login_manager.init_app(app)
    api.init_app(app)
    
    return app
