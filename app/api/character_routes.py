from flask import Blueprint, jsonify, session, request
from app.models import db
from app.models.character import Character
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_character_form import UpdateCharacterForm
from app.forms.create_character_form import CreateCharacterForm

character_routes = Blueprint('characters', __name__)

@character_routes.route('/books/<int:bookId>', methods=["GET"])
def get_by_book(bookId):
    chars = Character.query.filter(Character.book_id == bookId)
    if chars:
        return [char.to_dict() for char in chars]
    return {}

@character_routes.route('/<int:charId>', methods=["GET"])
def get_one_char(charId):
    char = Character.query.get(charId)

    if char:
        return char.to_dict()
    return { 'error': 'Character not found' }, 404

@character_routes.route('/<int:charId>', methods=["PUT"])
def update_char(charId):
    char = Character.query.get(charId)

    form = UpdateCharacterForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        faction_id = request.json['faction_id']
        name = request.json['name']
        age = request.json['age']
        birthday = request.json['birthday']
        race = request.json['race']
        traits = request.json['traits']
        personality = request.json['personality']
        quips = request.json['quips']
        description = request.json['description']
        notes = request.json['notes']

        if char:
            char.faction_id = faction_id
            char.name = name
            char.age = age
            char.birthday = birthday
            char.race = race
            char.traits = traits
            char.personality = personality
            char.quips = quips
            char.description = description
            char.notes = notes

            db.session.commit()
            return char.to_dict()
        else:
            return { 'errors': 'Character not found' }, 404
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401

@character_routes.route('/<int:charId>', methods=["DELETE"])
def delete_character(charId):
    character = Character.query.get(charId)

    if character:
        character_dict = character.to_dict()
        db.session.delete(character)
        db.session.commit()
        return character_dict
    else:
        return { 'errors': 'Character not found' }, 404

@character_routes.route('/new', methods=["POST"])
def create_character():
    form = CreateCharacterForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        book_id = request.json['book_id']
        world_id = request.json['world_id']
        faction_id = request.json['faction_id']
        name = request.json['name']
        age = request.json['age']
        birthday = request.json['birthday']
        race = request.json['race']
        traits = request.json['traits']
        personality = request.json['personality']
        quips = request.json['quips']
        description = request.json['description']
        notes = request.json['notes']

        new_character = Character(
            book_id=book_id,
            world_id=world_id,
            faction_id=faction_id,
            name=name,
            age=age,
            birthday=birthday,
            race=race,
            traits=traits,
            personality=personality,
            quips=quips,
            description=description,
            notes=notes
        )

        db.session.add(new_character)
        db.session.commit()
        return new_character.to_dict()
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401
