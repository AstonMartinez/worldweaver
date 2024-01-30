from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class CreateEventForm(FlaskForm):
    name = StringField('Name')
    timeframe = StringField('Timeframe')
    details = StringField('Details')
    impact = StringField('Impact')
