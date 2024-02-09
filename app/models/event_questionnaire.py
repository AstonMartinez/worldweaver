from .db import db, environment, SCHEMA, add_prefix_for_prod


class EventQuestionnaire(db.Model):
    __tablename__ = 'event_questionnaires'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id"), ondelete="CASCADE"), nullable=False)
    cause_one = db.Column(db.String(5000))
    cause_two = db.Column(db.String(5000))
    cause_three = db.Column(db.String(5000))
    context_one = db.Column(db.String(5000))
    context_two = db.Column(db.String(5000))
    context_three = db.Column(db.String(5000))
    context_four = db.Column(db.String(5000))
    context_five = db.Column(db.String(5000))
    effect_one = db.Column(db.String(5000))
    effect_two = db.Column(db.String(5000))
    effect_three = db.Column(db.String(5000))
    effect_four = db.Column(db.String(5000))
    effect_five = db.Column(db.String(5000))
    effect_six = db.Column(db.String(5000))
    effect_seven = db.Column(db.String(5000))
    themes_one = db.Column(db.String(5000))
    themes_two = db.Column(db.String(5000))
    themes_three = db.Column(db.String(5000))

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'book_id': self.book_id,
            'cause': [self.cause_one, self.cause_two, self.cause_three],
            'context': [self.context_one, self.context_two, self.context_three, self.context_four, self.context_five],
            'effect': [self.effect_one, self.effect_two, self.effect_three, self.effect_four, self.effect_five, self.effect_six, self.effect_seven],
            'themes': [self.themes_one, self.themes_two, self.themes_three]
        }
