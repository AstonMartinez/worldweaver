from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.book import Book
from flask_login import current_user, login_required

book_routes = Blueprint('books', __name__)

@book_routes.route('/books/user', methods=["GET"])
def get_user_books():
    return {}
