from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class UpdateMagicForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    description = StringField('Description')
    element = StringField('Element')
    rules = StringField('Rules')
    uses = StringField('Uses')
    notes = StringField('Notes')
