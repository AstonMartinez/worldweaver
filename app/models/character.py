from .db import db, environment, SCHEMA, add_prefix_for_prod


class Character(db.Model):
    __tablename__ = 'characters'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id"), ondelete="CASCADE"), nullable=False)
    world_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("worlds.id"), ondelete="SET NULL"), nullable=True)
    faction_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('factions.id'), ondelete="SET NULL"), nullable=True)
    name = db.Column(db.String(255), nullable=False)
    age = db.Column(db.Integer)
    birthday = db.Column(db.String(255))
    race = db.Column(db.String(255))
    traits = db.Column(db.String(1000))
    personality = db.Column(db.String(1000))
    quips = db.Column(db.String(1000))
    description = db.Column(db.String(5000))
    notes = db.Column(db.String(5000))

    book = db.relationship('Book', back_populates='characters')

    # one world many characters
    world = db.relationship('World', back_populates='characters')

    # one character many factions
    factions = db.relationship('Faction', back_populates='characters')

    def to_dict(self):
        return {
            'id': self.id,
            'book_id': self.book_id,
            'world_id': self.world_id,
            'faction_id': self.faction_id,
            'name': self.name,
            'age': self.age,
            'birthday': self.birthday,
            'race': self.race,
            'traits': self.traits,
            'personality': self.personality,
            'quips': self.quips,
            'description': self.description,
            'notes': self.notes
        }
