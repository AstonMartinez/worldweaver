from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class CreateCharacterForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    traits = StringField('Traits')
    personality = StringField('Personality')
    quips = StringField('Quips')
    description = StringField('Description')
    notes = StringField('Notes')
