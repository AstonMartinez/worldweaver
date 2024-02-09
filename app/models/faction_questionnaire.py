from .db import db, environment, SCHEMA, add_prefix_for_prod


class FactionQuestionnaire(db.Model):
    __tablename__ = 'faction_questionnaires'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id"), ondelete="CASCADE"), nullable=False)
    goals_one = db.Column(db.String(5000))
    goals_two = db.Column(db.String(5000))
    goals_three = db.Column(db.String(5000))
    goals_four = db.Column(db.String(5000))
    goals_five = db.Column(db.String(5000))
    goals_six = db.Column(db.String(5000))
    goals_seven = db.Column(db.String(5000))
    history_one = db.Column(db.String(5000))
    history_two = db.Column(db.String(5000))
    history_three = db.Column(db.String(5000))
    history_four = db.Column(db.String(5000))
    name_one = db.Column(db.String(5000))
    name_two = db.Column(db.String(5000))
    name_three = db.Column(db.String(5000))
    ranks_one = db.Column(db.String(5000))
    ranks_two = db.Column(db.String(5000))
    ranks_three = db.Column(db.String(5000))
    ranks_four = db.Column(db.String(5000))
    ranks_five = db.Column(db.String(5000))
    ranks_six = db.Column(db.String(5000))
    tape_one = db.Column(db.String(5000))
    tape_two = db.Column(db.String(5000))
    tape_three = db.Column(db.String(5000))
    reputation_one = db.Column(db.String(5000))
    reputation_two = db.Column(db.String(5000))
    reputation_three = db.Column(db.String(5000))
    reputation_four = db.Column(db.String(5000))
    reputation_five = db.Column(db.String(5000))
    turf_one = db.Column(db.String(5000))
    turf_two = db.Column(db.String(5000))
    turf_three = db.Column(db.String(5000))
    turf_four = db.Column(db.String(5000))

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'book_id': self.book_id,
            'goals_purpose': [self.goals_one, self.goals_two, self.goals_three, self.goals_four, self.goals_five, self.goals_six, self.goals_seven],
            'history_future': [self.history_one, self.history_two, self.history_three, self.history_four],
            'name_title': [self.name_one, self.name_two, self.name_three],
            'ranks_influence': [self.ranks_one, self.ranks_two, self.ranks_three, self.ranks_four, self.ranks_five, self.ranks_six],
            'red_tape': [self.tape_one, self.tape_two, self.tape_three],
            'reputation': [self.reputation_one, self.reputation_two, self.reputation_three, self.reputation_four, self.reputation_five],
            'turf': [self.turf_one, self.turf_two, self.turf_three, self.turf_four]
        }
