from flask import Blueprint, jsonify, session, request
from app.models import db
from app.models.element import Element
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_element_form import UpdateElementForm
from app.forms.create_element_form import CreateElementForm

element_routes = Blueprint('elements', __name__)

@element_routes.route('/<int:elemId>', methods=["GET"])
def get_element(elemId):
    element = Element.query.get(elemId)

    if element:
        return element.to_dict()
    return { 'errors': 'Element not found' }, 404

@element_routes.route('/<int:elemId>', methods=["PUT"])
def update_element(elemId):
    element = Element.query.get(elemId)

    form = UpdateElementForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        name = request.json['name']
        details = request.json['details']

        if element:
            element.name = name
            element.details = details

            db.session.commit()
            return element.to_dict()
        else:
            return { 'errors': 'Element not found' }
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401

@element_routes.route('/<int:elemId>', methods=["DELETE"])
def delete_element(elemId):
    element = Element.query.get(elemId)

    if element:
        element_dict = element.to_dict()
        db.session.delete(element)
        db.session.commit()
        return element_dict
    else:
        return { 'errors': 'Element not found' }, 404

@element_routes.route('/new', methods=["POST"])
def create_element():
    form = CreateElementForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        book_id = request.json['book_id']
        name = request.json['name']
        details = request.json['details']

        new_element = Element(
            author_id=current_user.id,
            book_id=book_id,
            name=name,
            details=details
        )

        db.session.add(new_element)
        db.session.commit()
        return new_element.to_dict()
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401
