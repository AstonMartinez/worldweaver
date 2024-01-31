from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class UpdateElementForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    details = StringField('Details')
