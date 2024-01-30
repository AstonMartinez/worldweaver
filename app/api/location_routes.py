from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.location import Location
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_location_form import UpdateLocationForm
from app.forms.create_location_form import CreateLocationForm

location_routes = Blueprint('locations', __name__)

@location_routes.route('/<int:locationId>', methods=["GET"])
def get_location(locationId):
    location = Location.query.get(locationId)

    if location:
        return location.to_dict()
    else:
        return { 'error': 'Location not found' }, 404

@location_routes.route('/<int:locationId>', methods=["PUT"])
def update_location(locationId):
    location = Location.query.get(locationId)

    form = UpdateLocationForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        name = request.json['name']
        description = request.json['description']

        if location:
            location.name = name
            location.description = description
            db.session.commit()
            return location.to_dict()
        else:
            return { 'error': 'Location not found' }, 404
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401

@location_routes.route('<int:locationId>', methods=["DELETE"])
def delete_location(locationId):
    location = Location.query.get(locationId)

    if location:
        location_dict = location.to_dict()
        db.session.delete(location)
        db.session.commit()
        return location_dict
    else:
        return { 'error': 'Location not found' }, 404

@location_routes.route('/new', methods=["POST"])
def create_location():
    form = CreateLocationForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        world_id = request.json['world_id']
        book_id = request.json['book_id']
        name = request.json['name']
        description = request.json['description']

        new_location = Location(
            world_id=world_id,
            book_id=book_id,
            name=name,
            description=description
        )

        db.session.add(new_location)
        db.session.commit()
        return new_location.to_dict()
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401
