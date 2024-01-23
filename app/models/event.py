from .db import db, environment, SCHEMA, add_prefix_for_prod


class Event(db.Model):
    __tablename__ = 'events'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id")), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    timeframe = db.Column(db.String(500))
    details = db.Column(db.String(2000))
    impact = db.Column(db.String(2000))

    # one location many events
    location = db.relationship('Location', back_populates='events')

    # one event many characters
    characters = db.relationship('Character', back_populates='events')

    # one event many factions
    factions = db.relationship('Faction', back_populates='events')

    def to_dict(self):
        return {
            'id': self.id,
            'book_id': self.book_id,
            'name': self.name,
            'world': self.world.to_dict(),
            'location': self.location.to_dict(),
            'events': [event.to_dict() for event in self.events],
            'factions': [faction.to_dict() for faction in self.factions]
        }
