from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class CreateRaceForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    classification = StringField('Classification')
    appearance = StringField('Appearance')
    fashion = StringField('Fashion')
    language = StringField('Language')
    status = StringField('Status')
    religion_and_deities = StringField('Religion & Deities')
    society_and_culture = StringField('Society & Culture')
    notes = StringField('Notes')
