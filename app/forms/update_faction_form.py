from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class UpdateFactionForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    details = StringField('Details')
    allegiance = StringField('Allegiance')
