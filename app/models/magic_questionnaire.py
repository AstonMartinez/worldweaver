from .db import db, environment, SCHEMA, add_prefix_for_prod


class MagicQuestionnaire(db.Model):
    __tablename__ = 'magic_questionnaires'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id"), ondelete="CASCADE"), nullable=False)
    basics_one = db.Column(db.String(5000))
    basics_two = db.Column(db.String(5000))
    basics_three = db.Column(db.String(5000))
    basics_four = db.Column(db.String(5000))
    basics_five = db.Column(db.String(5000))
    basics_six = db.Column(db.String(5000))
    basics_seven = db.Column(db.String(5000))
    basics_eight = db.Column(db.String(5000))
    basics_nine = db.Column(db.String(5000))
    basics_ten = db.Column(db.String(5000))
    costs_one = db.Column(db.String(5000))
    costs_two = db.Column(db.String(5000))
    costs_three = db.Column(db.String(5000))
    costs_four = db.Column(db.String(5000))
    costs_five = db.Column(db.String(5000))
    costs_six = db.Column(db.String(5000))
    culture_one = db.Column(db.String(5000))
    culture_two = db.Column(db.String(5000))
    culture_three = db.Column(db.String(5000))
    culture_four = db.Column(db.String(5000))
    culture_five = db.Column(db.String(5000))
    culture_six = db.Column(db.String(5000))
    culture_seven = db.Column(db.String(5000))
    limits_one = db.Column(db.String(5000))
    limits_two = db.Column(db.String(5000))
    limits_three = db.Column(db.String(5000))
    origins_one = db.Column(db.String(5000))
    origins_two = db.Column(db.String(5000))
    origins_three = db.Column(db.String(5000))
    origins_four = db.Column(db.String(5000))
    users_one = db.Column(db.String(5000))
    users_two = db.Column(db.String(5000))
    users_three = db.Column(db.String(5000))
    users_four = db.Column(db.String(5000))
    users_five = db.Column(db.String(5000))
    users_six = db.Column(db.String(5000))
    users_seven = db.Column(db.String(5000))
    users_eight = db.Column(db.String(5000))
    users_nine = db.Column(db.String(5000))

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'book_id': self.book_id,
            'basics': [self.basics_one, self.basics_two, self.basics_three, self.basics_four, self.basics_five, self.basics_six, self.basics_seven, self.basics_eight, self.basics_nine, self.basics_ten],
            'costs_dangers': [self.costs_one, self.costs_two, self.costs_three, self.costs_four, self.costs_five, self.costs_six],
            'culture': [self.culture_one, self.culture_two, self.culture_three, self.culture_four, self.culture_five, self.culture_six, self.culture_seven],
            'limitations': [self.limits_one, self.limits_two, self.limits_three],
            'origins': [self.origins_one, self.origins_two, self.origins_three, self.origins_four],
            'users': [self.users_one, self.users_two, self.users_three, self.users_four, self.users_five, self.users_six, self.users_seven, self.users_eight, self.users_nine],
        }
