from .db import db, environment, SCHEMA, add_prefix_for_prod


class Location(db.Model):
    __tablename__ = 'locations'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    world_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("worlds.id")), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id")), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(5000))

    # one world many locations
    world = db.relationship('World', back_populates='locations')

    # one location many events
    events = db.relationship('Event', back_populates='location')

    def to_dict(self):
        return {
            'id': self.id,
            'book_id': self.book_id,
            'world_id': self.world_id,
            'name': self.name,
            'description': self.description,
            'world': self.world.to_dict(),
            # 'events': [event.to_dict() for event in self.events]
        }
