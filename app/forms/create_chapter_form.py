from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class CreateChapterForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    highlights = StringField('Highlights')
