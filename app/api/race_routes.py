from flask import Blueprint, jsonify, session, request
from app.models import db
from app.models.race import Race
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_race_form import UpdateRaceForm
from app.forms.create_race_form import CreateRaceForm

race_routes = Blueprint('races', __name__)

@race_routes.route('/<int:raceId>', methods=["GET"])
def get_race(raceId):
    race = Race.query.get(raceId)

    if race:
        return race.to_dict()
    return { 'errors': 'Race not found' }, 404

@race_routes.route('/<int:raceId>', methods=["PUT"])
def update_race(raceId):
    race = Race.query.get(raceId)

    form = UpdateRaceForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        name = request.json['name']
        classification = request.json['classification']
        appearance = request.json['appearance']
        fashion = request.json['fashion']
        language = request.json['language']
        status = request.json['status']
        religion_and_deities = request.json['religion_and_deities']
        society_and_culture = request.json['society_and_culture']
        notes = request.json['notes']

        if race:
            race.name = name
            race.classification = classification
            race.appearance = appearance
            race.fashion = fashion
            race.language = language
            race.status = status
            race.religion_and_deities = religion_and_deities
            race.society_and_culture = society_and_culture
            race.notes = notes

            db.session.commit()
            return race.to_dict()
        else:
            return { 'errors': 'Race not found' }
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401

@race_routes.route('/<int:raceId>', methods=["DELETE"])
def delete_race(raceId):
    race = Race.query.get(raceId)

    if race:
        race_dict = race.to_dict()
        db.session.delete(race)
        db.session.commit()
        return race_dict
    else:
        return { 'errors': 'Race not found' }, 404

@race_routes.route('/new', methods=["POST"])
def create_race():
    form = CreateRaceForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        world_id = request.json['world_id']
        book_id = request.json['book_id']
        name = request.json['name']
        classification = request.json['classification']
        appearance = request.json['appearance']
        fashion = request.json['fashion']
        language = request.json['language']
        status = request.json['status']
        religion_and_deities = request.json['religion_and_deities']
        society_and_culture = request.json['society_and_culture']
        notes = request.json['notes']

        new_race = Race(
            world_id=world_id,
            book_id=book_id,
            name=name,
            classification=classification,
            appearance=appearance,
            fashion=fashion,
            language=language,
            status=status,
            religion_and_deities=religion_and_deities,
            society_and_culture=society_and_culture,
            notes=notes
        )

        db.session.add(new_race)
        db.session.commit()
        return new_race.to_dict()
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401
