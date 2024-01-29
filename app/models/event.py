from .db import db, environment, SCHEMA, add_prefix_for_prod


class Event(db.Model):
    __tablename__ = 'events'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id"), ondelete="CASCADE"), nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('locations.id'), ondelete="SET NULL"), nullable=True)
    world_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("worlds.id"), ondelete="SET NULL"), nullable=True)
    name = db.Column(db.String(255), nullable=False)
    timeframe = db.Column(db.String(500))
    details = db.Column(db.String(2000))
    impact = db.Column(db.String(2000))

    # one location many events
    location = db.relationship('Location', back_populates='events')

    # one event many characters
    # characters = db.relationship('Character', back_populates='events')

    # one event many factions
    # factions = db.relationship('Faction', back_populates='events')

    def to_dict(self):
        return {
            'id': self.id,
            'book_id': self.book_id,
            'world_id': self.world_id,
            'name': self.name,
            'timeframe': self.timeframe,
            'details': self.details,
            'impact': self.impact,
            'location': self.location.to_dict(),
        }
