from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.character import Character
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_character_form import UpdateCharacterForm

character_routes = Blueprint('characters', __name__)

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
        traits = request.json['traits']
        personality = request.json['personality']
        quips = request.json['quips']
        description = request.json['description']
        notes = request.json['notes']

        if char:
            char.faction_id = faction_id
            char.name = name
            char.traits = traits
            char.personality = personality
            char.quips = quips
            char.description = description
            char.notes = notes

            db.session.commit()
            return char.to_dict()
        else:
            return { 'error': 'Character not found' }, 404
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401
