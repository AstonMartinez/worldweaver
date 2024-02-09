from .db import db, environment, SCHEMA, add_prefix_for_prod


class CharacterQuestionnaire(db.Model):
    __tablename__ = 'character_questionnaires'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id"), ondelete="CASCADE"), nullable=False)
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
    appearance_fourteen = db.Column(db.String(5000))
    appearance_fifteen = db.Column(db.String(5000))
    appearance_sixteen = db.Column(db.String(5000))
    appearance_seventeen = db.Column(db.String(5000))
    appearance_eighteen = db.Column(db.String(5000))
    appearance_nineteen = db.Column(db.String(5000))
    appearance_twenty = db.Column(db.String(5000))
    appearance_twenty_one = db.Column(db.String(5000))
    appearance_twenty_two = db.Column(db.String(5000))
    appearance_twenty_three = db.Column(db.String(5000))
    appearance_twenty_four = db.Column(db.String(5000))
    appearance_twenty_five = db.Column(db.String(5000))
    conflict_one = db.Column(db.String(5000))
    conflict_two = db.Column(db.String(5000))
    conflict_three = db.Column(db.String(5000))
    conflict_four = db.Column(db.String(5000))
    conflict_five = db.Column(db.String(5000))
    conflict_six = db.Column(db.String(5000))
    conflict_seven = db.Column(db.String(5000))
    conflict_eight = db.Column(db.String(5000))
    conflict_nine = db.Column(db.String(5000))
    conflict_ten = db.Column(db.String(5000))
    conflict_eleven = db.Column(db.String(5000))
    conflict_twelve = db.Column(db.String(5000))
    conflict_thirteen = db.Column(db.String(5000))
    basics_one = db.Column(db.String(5000))
    basics_two = db.Column(db.String(5000))
    basics_three = db.Column(db.String(5000))
    basics_four = db.Column(db.String(5000))
    basics_five = db.Column(db.String(5000))
    basics_six = db.Column(db.String(5000))
    daily_one = db.Column(db.String(5000))
    daily_two = db.Column(db.String(5000))
    daily_three = db.Column(db.String(5000))
    daily_four = db.Column(db.String(5000))
    daily_five = db.Column(db.String(5000))
    daily_six = db.Column(db.String(5000))
    daily_seven = db.Column(db.String(5000))
    daily_eight = db.Column(db.String(5000))
    daily_nine = db.Column(db.String(5000))
    favorites_one = db.Column(db.String(5000))
    favorites_two = db.Column(db.String(5000))
    favorites_three = db.Column(db.String(5000))
    favorites_four = db.Column(db.String(5000))
    favorites_five = db.Column(db.String(5000))
    favorites_six = db.Column(db.String(5000))
    favorites_seven = db.Column(db.String(5000))
    favorites_eight = db.Column(db.String(5000))
    favorites_nine = db.Column(db.String(5000))
    favorites_ten = db.Column(db.String(5000))
    favorites_eleven = db.Column(db.String(5000))
    favorites_twelve = db.Column(db.String(5000))
    friends_one = db.Column(db.String(5000))
    friends_two = db.Column(db.String(5000))
    friends_three = db.Column(db.String(5000))
    friends_four = db.Column(db.String(5000))
    friends_five = db.Column(db.String(5000))
    friends_six = db.Column(db.String(5000))
    friends_seven = db.Column(db.String(5000))
    friends_eight = db.Column(db.String(5000))
    friends_nine = db.Column(db.String(5000))
    friends_ten = db.Column(db.String(5000))
    love_one = db.Column(db.String(5000))
    love_two = db.Column(db.String(5000))
    love_three = db.Column(db.String(5000))
    love_four = db.Column(db.String(5000))
    love_five = db.Column(db.String(5000))
    love_six = db.Column(db.String(5000))
    love_seven = db.Column(db.String(5000))
    misc_one = db.Column(db.String(5000))
    misc_two = db.Column(db.String(5000))
    misc_three = db.Column(db.String(5000))
    misc_four = db.Column(db.String(5000))
    misc_five = db.Column(db.String(5000))
    misc_six = db.Column(db.String(5000))
    misc_seven = db.Column(db.String(5000))
    misc_eight = db.Column(db.String(5000))
    misc_nine = db.Column(db.String(5000))
    misc_ten = db.Column(db.String(5000))
    misc_eleven = db.Column(db.String(5000))
    misc_twelve = db.Column(db.String(5000))
    misc_thirteen = db.Column(db.String(5000))
    misc_fourteen = db.Column(db.String(5000))
    misc_fifteen = db.Column(db.String(5000))
    misc_sixteen = db.Column(db.String(5000))
    misc_seventeen = db.Column(db.String(5000))
    misc_eighteen = db.Column(db.String(5000))
    misc_nineteen = db.Column(db.String(5000))
    history_one = db.Column(db.String(5000))
    history_two = db.Column(db.String(5000))
    history_three = db.Column(db.String(5000))
    history_four = db.Column(db.String(5000))
    history_five = db.Column(db.String(5000))
    history_six = db.Column(db.String(5000))
    history_seven = db.Column(db.String(5000))
    history_eight = db.Column(db.String(5000))
    history_nine = db.Column(db.String(5000))
    history_ten = db.Column(db.String(5000))
    history_eleven = db.Column(db.String(5000))
    history_twelve = db.Column(db.String(5000))
    history_thirteen = db.Column(db.String(5000))
    history_fourteen = db.Column(db.String(5000))
    history_fifteen = db.Column(db.String(5000))
    history_sixteen = db.Column(db.String(5000))
    history_seventeen = db.Column(db.String(5000))
    history_eighteen = db.Column(db.String(5000))
    history_nineteen = db.Column(db.String(5000))
    personality_one = db.Column(db.String(5000))
    personality_two = db.Column(db.String(5000))
    personality_three = db.Column(db.String(5000))
    personality_four = db.Column(db.String(5000))
    personality_five = db.Column(db.String(5000))
    personality_six = db.Column(db.String(5000))
    personality_seven = db.Column(db.String(5000))
    personality_eight = db.Column(db.String(5000))
    personality_nine = db.Column(db.String(5000))
    personality_ten = db.Column(db.String(5000))
    personality_eleven = db.Column(db.String(5000))
    personality_twelve = db.Column(db.String(5000))
    personality_thirteen = db.Column(db.String(5000))
    personality_fourteen = db.Column(db.String(5000))
    personality_fifteen = db.Column(db.String(5000))
    personality_sixteen = db.Column(db.String(5000))
    personality_seventeen = db.Column(db.String(5000))
    personality_eighteen = db.Column(db.String(5000))
    personality_nineteen = db.Column(db.String(5000))
    personality_twenty = db.Column(db.String(5000))
    personality_twenty_one = db.Column(db.String(5000))
    personality_twenty_two = db.Column(db.String(5000))
    personality_twenty_three = db.Column(db.String(5000))
    personality_twenty_four = db.Column(db.String(5000))
    personality_twenty_five = db.Column(db.String(5000))
    personality_twenty_six = db.Column(db.String(5000))
    personality_twenty_seven = db.Column(db.String(5000))
    personality_twenty_eight = db.Column(db.String(5000))
    personality_twenty_nine = db.Column(db.String(5000))
    personality_thirty = db.Column(db.String(5000))
    personality_thirty_one = db.Column(db.String(5000))
    personality_thirty_two = db.Column(db.String(5000))
    personality_thirty_three = db.Column(db.String(5000))
    personality_thirty_four = db.Column(db.String(5000))
    personality_thirty_five = db.Column(db.String(5000))
    personality_thirty_six = db.Column(db.String(5000))
    personality_thirty_seven = db.Column(db.String(5000))
    possessions_one = db.Column(db.String(5000))
    possessions_two = db.Column(db.String(5000))
    possessions_three = db.Column(db.String(5000))
    possessions_four = db.Column(db.String(5000))
    possessions_five = db.Column(db.String(5000))
    possessions_six = db.Column(db.String(5000))
    possessions_seven = db.Column(db.String(5000))
    spirituality_one = db.Column(db.String(5000))
    spirituality_two = db.Column(db.String(5000))
    spirituality_three = db.Column(db.String(5000))
    spirituality_four = db.Column(db.String(5000))
    spirituality_five = db.Column(db.String(5000))
    spirituality_six = db.Column(db.String(5000))
    spirituality_seven = db.Column(db.String(5000))
    spirituality_eight = db.Column(db.String(5000))
    spirituality_nine = db.Column(db.String(5000))
    spirituality_ten = db.Column(db.String(5000))
    values_one = db.Column(db.String(5000))
    values_two = db.Column(db.String(5000))
    values_three = db.Column(db.String(5000))
    values_four = db.Column(db.String(5000))
    values_five = db.Column(db.String(5000))
    values_six = db.Column(db.String(5000))
    work_one = db.Column(db.String(5000))
    work_two = db.Column(db.String(5000))
    work_three = db.Column(db.String(5000))
    work_four = db.Column(db.String(5000))
    work_five = db.Column(db.String(5000))
    work_six = db.Column(db.String(5000))
    work_seven = db.Column(db.String(5000))
    work_eight = db.Column(db.String(5000))
    work_nine = db.Column(db.String(5000))
    work_ten = db.Column(db.String(5000))

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'book_id': self.book_id,
            'appearance': [self.appearance_one, self.appearance_two, self.appearance_three, self.appearance_four, self.appearance_five, self.appearance_six, self.appearance_seven, self.appearance_eight, self.appearance_nine, self.appearance_ten, self.appearance_eleven, self.appearance_twelve, self.appearance_thirteen, self.appearance_fourteen, self.appearance_fifteen, self.appearance_sixteen, self.appearance_seventeen, self.appearance_eighteen, self.appearance_nineteen, self.appearance_twenty, self.appearance_twenty_one, self.appearance_twenty_two, self.appearance_twenty_three, self.appearance_twenty_four, self.appearance_twenty_five],
            'basics': [self.basics_one, self.basics_two, self.basics_three, self.basics_four, self.basics_five, self.basics_six],
            'conflict': [self.conflict_one, self.conflict_two, self.conflict_three, self.conflict_four, self.conflict_five, self.conflict_six, self.conflict_seven, self.conflict_eight, self.conflict_nine, self.conflict_ten, self.conflict_eleven, self.conflict_twelve, self.conflict_thirteen],
            'daily_life': [self.daily_one, self.daily_two, self.daily_three, self.daily_four, self.daily_five, self.daily_six, self.daily_seven, self.daily_eight, self.daily_nine],
            'favorites': [self.favorites_one, self.favorites_two, self.favorites_three, self.favorites_four, self.favorites_five, self.favorites_six, self.favorites_seven, self.favorites_eight, self.favorites_nine, self.favorites_ten, self.favorites_eleven, self.favorites_twelve],
            'friends_family': [self.friends_one, self.friends_two, self.friends_three, self.friends_four, self.friends_five, self.friends_six, self.friends_seven, self.friends_eight, self.friends_nine, self.friends_ten],
            'love': [self.love_one, self.love_two, self.love_three, self.love_four, self.love_five, self.love_six, self.love_seven],
            'miscellaneous': [self.misc_one, self.misc_two, self.misc_three, self.misc_four, self.misc_five, self.misc_six, self.misc_seven, self.misc_eight, self.misc_nine, self.misc_ten, self.misc_eleven, self.misc_twelve, self.misc_thirteen, self.misc_fourteen, self.misc_fifteen, self.misc_sixteen, self.misc_seventeen, self.misc_eighteen, self.misc_nineteen],
            'past_future': [self.history_one, self.history_two, self.history_three, self.history_four, self.history_five, self.history_six, self.history_seven, self.history_eight, self.history_nine, self.history_ten, self.history_eleven, self.history_twelve, self.history_thirteen, self.history_fourteen, self.history_fifteen, self.history_sixteen, self.history_seventeen, self.history_eighteen, self.history_nineteen],
            'personality': [self.personality_one, self.personality_two, self.personality_three, self.personality_four, self.personality_five, self.personality_six, self.personality_seven, self.personality_eight, self.personality_nine, self.personality_ten, self.personality_eleven, self.personality_twelve, self.personality_thirteen, self.personality_fourteen, self.personality_fifteen, self.personality_sixteen, self.personality_seventeen, self.personality_eighteen, self.personality_nineteen, self.personality_twenty, self.personality_twenty_one, self.personality_twenty_two, self.personality_twenty_three, self.personality_twenty_four, self.personality_twenty_five, self.personality_twenty_six, self.personality_twenty_seven, self.personality_twenty_eight, self.personality_twenty_nine, self.personality_thirty, self.personality_thirty_one, self.personality_thirty_two, self.personality_thirty_three, self.personality_thirty_four, self.personality_thirty_five, self.personality_thirty_six, self.personality_thirty_seven],
            'possessions': [self.possessions_one, self.possessions_two, self.possessions_three, self.possessions_four, self.possessions_five, self.possessions_six, self.possessions_seven],
            'spirituality': [self.spirituality_one, self.spirituality_two, self.spirituality_three, self.spirituality_four, self.spirituality_five, self.spirituality_six, self.spirituality_seven, self.spirituality_eight, self.spirituality_nine, self.spirituality_ten],
            'values': [self.values_one, self.values_two, self.values_three, self.values_four, self.values_five, self.values_six],
            'work_hobbies': [self.work_one, self.work_two, self.work_three, self.work_four, self.work_five, self.work_six, self.work_seven, self.work_eight, self.work_nine, self.work_ten],
        }