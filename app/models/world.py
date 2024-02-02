from .db import db, environment, SCHEMA, add_prefix_for_prod


class World(db.Model):
    __tablename__ = 'worlds'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id"), ondelete="CASCADE"), nullable=False)
    name = db.Column(db.String(255))
    description = db.Column(db.String(5000))
    notes = db.Column(db.String(5000))
    landscape = db.Column(db.String(5000))
    natural_resources = db.Column(db.String(5000))
    seasons = db.Column(db.String(5000))
    weather = db.Column(db.String(5000))
    animals = db.Column(db.String(5000))
    plants = db.Column(db.String(5000))

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
            'landscape': self.landscape,
            'natural_resources': self.natural_resources,
            'seasons': self.seasons,
            'weather': self.weather,
            'animals': self.animals,
            'plants': self.plants
            # 'locations': [loc.to_dict() for loc in self.locations]
        }
