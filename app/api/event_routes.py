from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.event import Event
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_event_form import EventUpdateForm

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
