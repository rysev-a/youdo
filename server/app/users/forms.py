from wtforms_alchemy import ModelForm
from wtforms import StringField
from wtforms.validators import DataRequired
from wtforms_alchemy.validators import Unique
from .models import User



class UserForm(ModelForm):
    email = StringField(validators=[DataRequired(), Unique(User.email)])
    first_name = StringField(validators=[DataRequired()])
    password = StringField(validators=[DataRequired()])
