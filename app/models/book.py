from .db import db, environment, SCHEMA, add_prefix_for_prod


class Book(db.Model):
    __tablename__ = 'books'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    title = db.Column(db.String(500))
    blurb = db.Column(db.String(2000))
    themes = db.Column(db.String(2000))
    genres = db.Column(db.String(500))
    plot_details = db.Column(db.String(5000))
    style_and_voice = db.Column(db.String(2000))

    # one book many characters
    characters = db.relationship('Character', back_populates='book')

    # one book many chapters
    chapters = db.relationship('Chapter', back_populates='book')

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'title': self.title,
            'blurb': self.blurb,
            'themes': self.themes,
            'genres': self.genres,
            'plot_details': self.plot_details,
            'style_and_voice': self.style_and_voice,
            'characters': [char.to_dict() for char in self.characters],
            'chapters': [chap.to_dict() for chap in self.chapters]
        }
