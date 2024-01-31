from .db import db, environment, SCHEMA, add_prefix_for_prod

class Race(db.Model):
    __tablename__ = 'races'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    world_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("worlds.id"), ondelete="CASCADE"))
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id"), ondelete="CASCADE"), nullable=False)
    name = db.Column(db.String(255))
    classification = db.Column(db.String(500))
    appearance = db.Column(db.String(5000))
    fashion = db.Column(db.String(5000))
    language = db.Column(db.String(255))
    status = db.Column(db.String(1000))
    religion_and_deities = db.Column(db.String(5000))
    primary_location_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("locations.id"), ondelete="SET NULL"), nullable=True)
    society_and_culture = db.Column(db.String(5000))
    notes = db.Column(db.String(5000))

    def to_dict(self):
        return {
            'id': self.id,
            'world_id': self.world_id,
            'book_id': self.book_id,
            'name': self.name,
            'classification': self.classification,
            'appearance': self.appearance,
            'fashion': self.fashion,
            'language': self.language,
            'status': self.status,
            'religion_and_deities': self.religion_and_deities,
            'primary_location_id': self.primary_location_id,
            'society_and_culture': self.society_and_culture,
            'notes': self.notes
        }
