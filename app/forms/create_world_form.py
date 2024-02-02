from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class CreateWorldForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    description = StringField('Description')
    notes = StringField('Notes')
    landscape = StringField('Landscape')
    natural_resources = StringField('Natural Resources')
    seasons = StringField('Seasons')
    weather = StringField('Weather')
    animals = StringField('Animals')
    plants = StringField('Plants')
