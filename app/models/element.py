from .db import db, environment, SCHEMA, add_prefix_for_prod

class Element(db.Model):
    __tablename__ = 'elements'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id"), ondelete="CASCADE"), nullable=False)
    name = db.Column(db.String(255))
    details = db.Column(db.String(5000))

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'book_id': self.book_id,
            'name': self.name,
            'details': self.details
        }
