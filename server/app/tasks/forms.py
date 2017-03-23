from wtforms_alchemy import ModelForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length
from .models import Task

class TaskForm(ModelForm):
    class Meta:
        model = Task

    name = StringField(validators=[DataRequired()])
    description = StringField(validators=[DataRequired(), Length(max=500)])
    category_id = IntegerField(validators=[DataRequired()])
    price = IntegerField(validators=[DataRequired()])
