from wtforms_alchemy import ModelForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email
from wtforms_alchemy.validators import Unique
from .models import User



class UserForm(ModelForm):
    email = StringField(validators=[Email(), DataRequired(), Unique(User.email)])
    first_name = StringField(validators=[DataRequired()])
    password = StringField(validators=[DataRequired()])


class ProfileForm(ModelForm):
    email = StringField(validators=[Email(), Unique(User.email)])
    first_name = StringField(validators=[DataRequired()]) 
