from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.event import Event
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_event_form import EventUpdateForm
from app.forms.create_event_form import CreateEventForm

event_routes = Blueprint('events', __name__)

@event_routes.route('/<int:eventId>', methods=["PUT"])
def update_event(eventId):
    event = Event.query.get(eventId)

    form = EventUpdateForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        name = request.json['name']
        timeframe = request.json['timeframe']
        details = request.json['details']
        impact = request.json['impact']

        if event:
            event.name = name
            event.timeframe = timeframe
            event.details = details
            event.impact = impact

            db.session.commit()
            return event.to_dict()
        else:
            return { 'error': 'Event not found' }, 404
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401

@event_routes.route('<int:eventId>', methods=["DELETE"])
def delete_event(eventId):
    event = Event.query.get(eventId)

    if event:
        event_dict = event.to_dict()
        db.session.delete(event)
        db.session.commit()
        return event_dict
    else:
        return { 'error': 'Event not found' }, 404

@event_routes.route('/new', methods=["POST"])
def create_event():
    form = CreateEventForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        book_id = request.json['book_id']
        world_id = request.json['world_id']
        location_id = request.json['location_id']
        name = request.json['name']
        timeframe = request.json['timeframe']
        details = request.json['details']
        impact = request.json['impact']

        new_event = Event(
            book_id=book_id,
            world_id=world_id,
            location_id=location_id,
            name=name,
            timeframe=timeframe,
            details=details,
            impact=impact
        )

        db.session.add(new_event)
        db.session.commit()
        return new_event.to_dict()
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401
