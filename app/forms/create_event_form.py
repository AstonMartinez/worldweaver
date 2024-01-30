from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class CreateEventForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    timeframe = StringField('Timeframe')
    details = StringField('Details')
    impact = StringField('Impact')
