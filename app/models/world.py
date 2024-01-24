from .db import db, environment, SCHEMA, add_prefix_for_prod


class World(db.Model):
    __tablename__ = 'worlds'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id")), nullable=False)
    name = db.Column(db.String(255))
    description = db.Column(db.String(5000))
    notes = db.Column(db.String(5000))

    # one world many locations
    locations = db.relationship('Location', back_populates='world')

    # one world many characters
    characters = db.relationship('Character', back_populates='world')

    def to_dict(self):
        return {
            'id': self.id,
            'book_id': self.book_id,
            'name': self.name,
            'description': self.description,
            'notes': self.notes,
            # 'locations': [loc.to_dict() for loc in self.locations]
        }
