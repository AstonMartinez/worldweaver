from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class UpdateBookForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    blurb = StringField('Blurb')
    themes = StringField('Themes')
    genres = StringField('Genres')
    plot_details = StringField('Plot Details')
    style_and_voice = StringField('Style and Voice')
