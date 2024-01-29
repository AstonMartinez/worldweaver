from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.book import Book
from app.models.chapter import Chapter
from app.models.character import Character
from app.models.event import Event
from app.models.location import Location
from app.models.faction import Faction
from app.models.world import World
from app.forms.update_book_form import UpdateBookForm
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages

book_routes = Blueprint('books', __name__)

@book_routes.route('/user', methods=["GET"])
def get_user_books():
    """
    Returns a dictionary of the user's books, or an empty dictionary if the user has no books.
    """
    result = {}
    user_books = Book.query.filter(Book.author_id == current_user.id)

    if user_books:
        for book in user_books:
            result[book.id] = book.to_dict()
        return result
    return {}

@book_routes.route('/<int:bookId>', methods=["GET"])
def get_one_book(bookId):
    """
    Returns a single book in dictionary form.
    """
    result = {
        'bookDetails': {},
        'bookCharacters': [],
        'bookChapters': [],
        'bookFactions': [],
        'bookEvents': [],
        'bookLocations': [],
        'bookWorld': {}
    }
    book = Book.query.get(bookId)
    if book:
        if book.author_id == current_user.id:
            result['bookDetails'] = book.to_dict()

            characters = Character.query.filter(Character.book_id == bookId).all()
            if characters:
                chars = [char.to_dict() for char in characters]
                result['bookCharacters'] = chars

            chapters = Chapter.query.filter(Chapter.book_id == bookId).all()
            if chapters:
                chaps = [chap.to_dict() for chap in chapters]
                result['bookChapters'] = chaps

            factions = Faction.query.filter(Chapter.book_id == bookId).all()
            if factions:
                facs = [fac.to_dict() for fac in factions]
                result['bookFactions'] = facs

            events = Event.query.filter(Event.book_id == bookId).all()
            if events:
                eves = [eve.to_dict() for eve in events]
                result['bookEvents'] = eves

            locations = Location.query.filter(Location.book_id == bookId).all()
            if locations:
                locs = [loc.to_dict() for loc in locations]
                result['bookLocations'] = locs

            world = World.query.filter(World.book_id == bookId).first()
            if world:
                result['bookWorld'] = world.to_dict()
        return result
    return {}

@book_routes.route('/<int:bookId>', methods=["PUT"])
def update_book_details(bookId):
    """
    Updates a single book and returns the updated book.
    """
    book = Book.query.get(bookId)
    form = UpdateBookForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        title = request.json['title']
        blurb = request.json['blurb']
        themes = request.json['themes']
        genres = request.json['genres']
        plot_details = request.json['plot_details']
        style_and_voice = request.json['style_and_voice']

        if book:
            book.title = title
            book.blurb = blurb
            book.themes = themes
            book.genres = genres
            book.plot_details = plot_details
            book.style_and_voice = style_and_voice

            db.session.commit()
            return book.to_dict()
        else:
            return { 'errors': 'Book not found'}, 404
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401


@book_routes.route('/<int:bookId>', methods=["DELETE"])
def delete_book(bookId):
    book = Book.query.get(bookId)

    if book:
        book_dict = book.to_dict()
        db.session.delete(book)
        db.session.commit()
        return book_dict
    else:
        return { 'error': 'Book not found' }, 404
