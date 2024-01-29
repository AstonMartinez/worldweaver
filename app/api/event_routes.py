from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.event import Event
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_event_form import EventUpdateForm

event_routes = Blueprint('events', __name__)

@event_routes.route('/<int:eventId>', methods=["PUT"])
def update_event(eventId):
    return {}
