from .db import db, environment, SCHEMA, add_prefix_for_prod


class Faction(db.Model):
    __tablename__ = 'factions'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id")), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    details = db.Column(db.String(5000))
    details = db.Column(db.String(5000))

    # one book many factions
    book = db.relationship('Book', back_populates='factions')

    # one faction many characters
    characters = db.relationship('Character', back_populates='factions')

    # one faction many events
    # events = db.relationship('Event', back_populates='factions')

    def to_dict(self):
        return {
            'id': self.id,
            'book_id': self.book_id,
            'name': self.name,
            'details': self.description,
            'world': self.world.to_dict(),
            'book': self.book.to_dict(),
            'characters': [char.to_dict() for char in self.characters],
            # 'events': [event.to_dict() for event in self.events]
        }
