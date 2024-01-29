from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.faction import Faction
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_faction_form import UpdateFactionForm

faction_routes = Blueprint('factions', __name__)

@faction_routes.route('/<int:factionId>', methods=["PUT"])
def update_faction(factionId):
    faction = Faction.query.get(factionId)

    form = UpdateFactionForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        name = request.json['name']
        details = request.json['details']
        allegiance = request.json['allegiance']

        if faction:
            faction.name = name
            faction.details = details
            faction.allegiance = allegiance

            db.session.commit()
            return faction.to_dict()
        else:
            return { 'error': 'Faction not found' }, 404
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401

@faction_routes.route('<int:factionId>', methods=["DELETE"])
def delete_faction(factionId):
    faction = Faction.query.get(factionId)

    if faction:
        faction_dict = faction.to_dict()
        db.session.delete(faction)
        db.session.commit()
        return faction_dict
    else:
        return { 'error': 'Faction not found' }, 404
