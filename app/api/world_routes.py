from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.world import World
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_world_form import UpdateWorldForm

world_routes = Blueprint('worlds', __name__)

@world_routes.route('/<int:worldId>', methods=["GET"])
def get_world(worldId):
    world = World.query.get(worldId)

    if world:
        return world.to_dict()
    return { 'error': 'World not found' }, 404

@world_routes.route('/<int:worldId>', methods=["PUT"])
def update_world(worldId):
    world = World.query.get()

    form = UpdateWorldForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        name = request.json['name']
        description = request.json['description']
        notes = request.json['notes']

        if world:
            world.name = name
            world.description = description
            world.notes = notes

            db.session.commit()
            return world.to_dict()
        else:
            return { 'errors': 'World not found' }
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401

@world_routes.route('/<int:worldId>', methods=["DELETE"])
def delete_world(worldId):
    world = World.query.get(worldId)

    if world:
        world_dict = world.to_dict()
        db.session.delete(world)
        db.session.commit()
        return world_dict
    else:
        return { 'error': 'World not found' }, 404
