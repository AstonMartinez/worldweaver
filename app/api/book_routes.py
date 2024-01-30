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
from app.forms.create_book_form import CreateBookForm
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
            if len(characters) > 0:
                chars = [char.to_dict() for char in characters]
                result['bookCharacters'] = chars

            chapters = Chapter.query.filter(Chapter.book_id == bookId).all()
            if len(chapters) > 0:
                chaps = [chap.to_dict() for chap in chapters]
                result['bookChapters'] = chaps

            factions = Faction.query.filter(Chapter.book_id == bookId).all()
            if len(factions) > 0:
                facs = [fac.to_dict() for fac in factions]
                result['bookFactions'] = facs

            events = Event.query.filter(Event.book_id == bookId).all()
            if len(events) > 0:
                eves = [eve.to_dict() for eve in events]
                result['bookEvents'] = eves

            locations = Location.query.filter(Location.book_id == bookId).all()
            if len(locations) > 0:
                locs = [loc.to_dict() for loc in locations]
                result['bookLocations'] = locs

            world = World.query.filter(World.book_id == bookId).all()
            if len(world) > 0:
                result['bookWorld'] = world[0].to_dict()
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

@book_routes.route('/new', methods=["POST"])
def create_book():
    form = CreateBookForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        author_id = current_user.id
        title = request.json['title']
        blurb = request.json['blurb']
        themes = request.json['themes']
        genres = request.json['genres']
        plot_details = request.json['plot_details']
        style_and_voice = request.json['style_and_voice']

        new_book = Book(
            author_id=author_id,
            title=title,
            blurb=blurb,
            themes=themes,
            genres=genres,
            plot_details=plot_details,
            style_and_voice=style_and_voice
        )

        db.session.add(new_book)
        db.session.commit()
        return new_book.to_dict()
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401
