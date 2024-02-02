from .db import db, environment, SCHEMA, add_prefix_for_prod

class Magic(db.Model):
    __tablename__ = 'magic_types'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    world_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("worlds.id"), ondelete="SET NULL"), nullable=True)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id"), ondelete="CASCADE"), nullable=False)
    name = db.Column(db.String(255))
    description = db.Column(db.String(5000))
    element = db.Column(db.String(500))
    rules = db.Column(db.String(5000))
    uses = db.Column(db.String(5000))
    notes = db.Column(db.String(5000))

    def to_dict(self):
        return {
            'id': self.id,
            'world_id': self.world_id,
            'book_id': self.book_id,
            'name': self.name,
            'description': self.description,
            'element': self.element,
            'rules': self.rules,
            'uses': self.uses,
            'notes': self.notes
        }
