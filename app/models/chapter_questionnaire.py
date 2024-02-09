from .db import db, environment, SCHEMA, add_prefix_for_prod


class ChapterQuestionnaire(db.Model):
    __tablename__ = 'chapter_questionnaires'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id"), ondelete="CASCADE"), nullable=False)
    characters_one = db.Column(db.String(5000))
    characters_two = db.Column(db.String(5000))
    characters_three = db.Column(db.String(5000))
    characters_four = db.Column(db.String(5000))
    characters_five = db.Column(db.String(5000))
    events_one = db.Column(db.String(5000))
    events_two = db.Column(db.String(5000))
    events_three = db.Column(db.String(5000))
    events_four = db.Column(db.String(5000))
    events_five = db.Column(db.String(5000))
    plot_one = db.Column(db.String(5000))
    plot_two = db.Column(db.String(5000))
    plot_three = db.Column(db.String(5000))
    plot_four = db.Column(db.String(5000))
    plot_five = db.Column(db.String(5000))
    plot_six = db.Column(db.String(5000))
    plot_seven = db.Column(db.String(5000))
    purpose_one = db.Column(db.String(5000))
    purpose_two = db.Column(db.String(5000))
    purpose_three = db.Column(db.String(5000))
    purpose_four = db.Column(db.String(5000))
    purpose_five = db.Column(db.String(5000))
    purpose_six = db.Column(db.String(5000))
    setting_one = db.Column(db.String(5000))
    setting_two = db.Column(db.String(5000))
    setting_three = db.Column(db.String(5000))
    setting_four = db.Column(db.String(5000))
    setting_five = db.Column(db.String(5000))
    setting_six = db.Column(db.String(5000))
    setting_seven = db.Column(db.String(5000))
    setting_eight = db.Column(db.String(5000))
    theme_one = db.Column(db.String(5000))
    theme_two = db.Column(db.String(5000))
    theme_three = db.Column(db.String(5000))
    theme_four = db.Column(db.String(5000))

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'book_id': self.book_id,
            'characters': [self.characters_one, self.characters_two, self.characters_three, self.characters_four, self.characters_five],
            'events': [self.events_one, self.events_two, self.events_three, self.events_four, self.events_five],
            'plot': [self.plot_one, self.plot_two, self.plot_three, self.plot_four, self.plot_five, self.plot_six, self.plot_seven],
            'purpose': [self.purpose_one, self.purpose_two, self.purpose_three, self.purpose_four, self.purpose_five, self.purpose_six],
            'setting': [self.setting_one, self.setting_two, self.setting_three, self.setting_four, self.setting_five, self.setting_six, self.setting_seven, self.setting_eight],
            'tone_theme': [self.theme_one, self.theme_two, self.theme_three, self.theme_four]
        }
