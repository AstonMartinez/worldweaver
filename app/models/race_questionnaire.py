from .db import db, environment, SCHEMA, add_prefix_for_prod


class RaceQuestionnaire(db.Model):
    __tablename__ = 'race_questionnaires'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id"), ondelete="CASCADE"), nullable=False)
    age_one = db.Column(db.String(5000))
    age_two = db.Column(db.String(5000))
    age_three = db.Column(db.String(5000))
    age_four = db.Column(db.String(5000))
    age_five = db.Column(db.String(5000))
    age_six = db.Column(db.String(5000))
    age_seven = db.Column(db.String(5000))
    age_eight = db.Column(db.String(5000))
    age_nine = db.Column(db.String(5000))
    appearance_one = db.Column(db.String(5000))
    appearance_two = db.Column(db.String(5000))
    appearance_three = db.Column(db.String(5000))
    appearance_four = db.Column(db.String(5000))
    appearance_five = db.Column(db.String(5000))
    appearance_six = db.Column(db.String(5000))
    appearance_seven = db.Column(db.String(5000))
    appearance_eight = db.Column(db.String(5000))
    appearance_nine = db.Column(db.String(5000))
    appearance_ten = db.Column(db.String(5000))
    appearance_eleven = db.Column(db.String(5000))
    appearance_twelve = db.Column(db.String(5000))
    appearance_thirteen = db.Column(db.String(5000))
    architecture_one = db.Column(db.String(5000))
    architecture_two = db.Column(db.String(5000))
    architecture_three = db.Column(db.String(5000))
    architecture_four = db.Column(db.String(5000))
    art_one = db.Column(db.String(5000))
    art_two = db.Column(db.String(5000))
    art_three = db.Column(db.String(5000))
    biology_one = db.Column(db.String(5000))
    biology_two = db.Column(db.String(5000))
    biology_three = db.Column(db.String(5000))
    calendar_one = db.Column(db.String(5000))
    calendar_two = db.Column(db.String(5000))
    calendar_three = db.Column(db.String(5000))
    calendar_four = db.Column(db.String(5000))
    calendar_five = db.Column(db.String(5000))
    calendar_six = db.Column(db.String(5000))
    calendar_seven = db.Column(db.String(5000))
    gender_one = db.Column(db.String(5000))
    gender_two = db.Column(db.String(5000))
    gender_three = db.Column(db.String(5000))
    history_one = db.Column(db.String(5000))
    history_two = db.Column(db.String(5000))
    history_three = db.Column(db.String(5000))
    history_four = db.Column(db.String(5000))
    history_five = db.Column(db.String(5000))
    history_six = db.Column(db.String(5000))
    language_one = db.Column(db.String(5000))
    language_two = db.Column(db.String(5000))
    language_three = db.Column(db.String(5000))
    language_four = db.Column(db.String(5000))
    language_five = db.Column(db.String(5000))
    language_six = db.Column(db.String(5000))
    language_seven = db.Column(db.String(5000))
    language_eight = db.Column(db.String(5000))
    language_nine = db.Column(db.String(5000))
    language_ten = db.Column(db.String(5000))
    language_eleven = db.Column(db.String(5000))
    language_twelve = db.Column(db.String(5000))
    language_thirteen = db.Column(db.String(5000))
    language_fourteen = db.Column(db.String(5000))
    literature_one = db.Column(db.String(5000))
    literature_two = db.Column(db.String(5000))
    literature_three = db.Column(db.String(5000))
    location_one = db.Column(db.String(5000))
    location_two = db.Column(db.String(5000))
    location_three = db.Column(db.String(5000))
    manners_one = db.Column(db.String(5000))
    manners_two = db.Column(db.String(5000))
    manners_three = db.Column(db.String(5000))
    manners_four = db.Column(db.String(5000))
    manners_five = db.Column(db.String(5000))
    manners_six = db.Column(db.String(5000))
    manners_seven = db.Column(db.String(5000))
    manners_eight = db.Column(db.String(5000))
    manners_nine = db.Column(db.String(5000))
    manners_ten = db.Column(db.String(5000))
    manners_eleven = db.Column(db.String(5000))
    mse_one = db.Column(db.String(5000))
    mse_two = db.Column(db.String(5000))
    mse_three = db.Column(db.String(5000))
    mse_four = db.Column(db.String(5000))
    mse_five = db.Column(db.String(5000))
    physical_one = db.Column(db.String(5000))
    physical_two = db.Column(db.String(5000))

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'book_id': self.book_id,
            'aging': [self.age_one, self.age_two, self.age_three, self.age_four, self.age_five, self.age_six, self.age_seven, self.age_eight, self.age_nine],
            'appearance': [self.appearance_one, self.appearance_two, self.appearance_three, self.appearance_four, self.appearance_five, self.appearance_six, self.appearance_seven, self.appearance_eight, self.appearance_nine, self.appearance_ten, self.appearance_eleven, self.appearance_twelve, self.appearance_thirteen],
            'architecture': [self.architecture_one, self.architecture_two, self.architecture_three, self.architecture_four],
            'art': [self.art_one, self.art_two, self.art_three],
            'biology': [self.biology_one, self.biology_two, self.biology_three],
            'calendar': [self.calendar_one, self.calendar_two, self.calendar_three, self.calendar_four, self.calendar_five, self.calendar_six, self.calendar_seven],
            'gender': [self.gender_one, self.gender_two, self.gender_three],
            'history': [self.history_one, self.history_two, self.history_three, self.history_four, self.history_five, self.history_six],
            'language': [self.language_one, self.language_two, self.language_three, self.language_four, self.language_five, self.language_six, self.language_seven, self.language_eight, self.language_nine, self.language_ten, self.language_eleven, self.language_twelve, self.language_thirteen, self.language_fourteen],
            'literature': [self.literature_one, self.literature_two, self.literature_three],
            'locations': [self.location_one, self.location_two, self.location_three],
            'manners': [self.manners_one, self.manners_two, self.manners_three, self.manners_four, self.manners_five, self.manners_six, self.manners_seven, self.manners_eight, self.manners_nine, self.manners_ten, self.manners_eleven],
            'mental_spiritual_emotional': [self.mse_one, self.mse_two, self.mse_three, self.mse_four, self.mse_five],
            'physical_features': [self.physical_one, self.physical_two]
        }
