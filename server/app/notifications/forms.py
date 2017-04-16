from wtforms_alchemy import ModelForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from .models import Notification

class NotificationForm(ModelForm):
    class Meta:
        model = Notification

    content = StringField(validators=[DataRequired()])
    task_id = IntegerField(validators=[DataRequired()])
    user_id = IntegerField(validators=[DataRequired()])

