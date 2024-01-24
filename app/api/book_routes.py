from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.book import Book
from flask_login import current_user, login_required

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
