from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.location import Location
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_location_form import UpdateLocationForm

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
