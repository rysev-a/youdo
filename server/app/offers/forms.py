from wtforms_alchemy import ModelForm
from wtforms import IntegerField
from wtforms.validators import DataRequired


class OfferForm(ModelForm):
    customer_id = IntegerField(validators=[DataRequired()])
    task_id = IntegerField(validators=[DataRequired()])
    price = IntegerField(validators=[DataRequired()])
