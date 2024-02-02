from flask import Blueprint, jsonify, session, request
from app.models import db
from app.models.magic import Magic
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_magic_form import UpdateMagicForm
from app.forms.create_magic_form import CreateMagicForm

magic_routes = Blueprint('magic', __name__)

@magic_routes.route('/<int:magicId>', methods=["GET"])
def get_magic(magicId):
    magic = Magic.query.get(magicId)

    if magic:
        return magic.to_dict()
    return { 'errors': 'Magic not found' }, 404

@magic_routes.route('/<int:magicId>', methods=["PUT"])
def update_magic(magicId):
    magic = Magic.query.get(magicId)

    form = UpdateMagicForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        name = request.json['name']
        description = request.json['description']
        element = request.json['element']
        rules = request.json['rules']
        uses = request.json['uses']
        notes = request.json['notes']

        if magic:
            magic.name = name
            magic.description = description
            magic.element = element
            magic.rules = rules
            magic.uses = uses
            magic.notes = notes

            db.session.commit()
            return magic.to_dict()
        else:
            return { 'errors': 'Magic not found' }
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401

@magic_routes.route('/<int:magicId>', methods=["DELETE"])
def delete_magic(magicId):
    magic = Magic.query.get(magicId)

    if magic:
        magic_dict = magic.to_dict()
        db.session.delete(magic)
        db.session.commit()
        return magic_dict
    else:
        return { 'errors': 'Magic not found' }, 404

@magic_routes.route('/new', methods=["POST"])
def create_magic():
    form = CreateMagicForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        book_id = request.json['book_id']
        world_id = request.json['world_id']
        name = request.json['name']
        description = request.json['description']
        element = request.json['element']
        rules = request.json['rules']
        uses = request.json['uses']
        notes = request.json['notes']

        new_magic = Magic(
            book_id=book_id,
            world_id=world_id,
            name=name,
            description=description,
            element=element,
            rules=rules,
            uses=uses,
            notes=notes
        )

        db.session.add(new_magic)
        db.session.commit()
        return new_magic.to_dict()
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401
