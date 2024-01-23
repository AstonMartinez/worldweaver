from .db import db, environment, SCHEMA, add_prefix_for_prod


class Chapter(db.Model):
    __tablename__ = 'chapters'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id")), nullable=False)
    title = db.Column(db.String(255))
    highlights = db.Column(db.String(5000))
    draft = db.Column(db.String(50000))

    # one book many chapters
    book = db.relationship('Book', back_populates='chapters')

    def to_dict(self):
        return {
            'id': self.id,
            'book_id': self.book_id,
            'title': self.title,
            'highlights': self.highlights,
            'draft': self.draft,
            'book': self.book.to_dict()
        }
