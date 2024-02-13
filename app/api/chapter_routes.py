from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.chapter import Chapter
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_chapter_form import UpdateChapterForm
from app.forms.create_chapter_form import CreateChapterForm

chapter_routes = Blueprint('chapters', __name__)

@chapter_routes.route('/books/<int:bookId>', methods=["GET"])
def get_by_book(bookId):
    chapters = Chapter.query.filter(Chapter.book_id == bookId).all()
    if chapters:
        return [chap.to_dict() for chap in chapters]
    return {}

@chapter_routes.route('/<int:chapterId>', methods=["GET"])
def get_chapter(chapterId):
    chapter = Chapter.query.get(chapterId)

    if chapter:
        return chapter.to_dict()
    else:
        return { 'error': 'Chapter not found' }, 404

@chapter_routes.route('/<int:chapterId>', methods=["PUT"])
def update_chapter(chapterId):
    chapter = Chapter.query.get(chapterId)

    form = UpdateChapterForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        title = request.json['title']
        highlights = request.json['highlights']
        draft = request.json['draft']

        if chapter:
            chapter.title = title
            chapter.highlights = highlights
            chapter.draft = draft

            db.session.commit()
            return chapter.to_dict()
        else:
            return { 'error': 'Chapter not found' }, 404
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401

@chapter_routes.route('/<int:chapterId>', methods=["DELETE"])
def delete_chapter(chapterId):
    chapter = Chapter.query.get(chapterId)

    if chapter:
        chapter_dict = chapter.to_dict()
        db.session.delete(chapter)
        db.session.commit()
        return chapter_dict
    else:
        return { 'error': 'Chapter not found' }, 404

@chapter_routes.route('/new', methods=["POST"])
def create_chapter():
    form = CreateChapterForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        book_id = request.json['book_id']
        title = request.json['title']
        highlights = request.json['highlights']

        new_chapter = Chapter(
            book_id=book_id,
            title=title,
            highlights=highlights,
            draft=""
        )

        db.session.add(new_chapter)
        db.session.commit()
        return new_chapter.to_dict()
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401
