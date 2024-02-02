from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.models.world import World
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages
from app.forms.update_world_form import UpdateWorldForm
from app.forms.create_world_form import CreateWorldForm

world_routes = Blueprint('worlds', __name__)

@world_routes.route('/<int:worldId>', methods=["GET"])
def get_world(worldId):
    world = World.query.get(worldId)

    if world:
        return world.to_dict()
    return { 'error': 'World not found' }, 404

@world_routes.route('/<int:worldId>', methods=["PUT"])
def update_world(worldId):
    world = World.query.get(worldId)

    form = UpdateWorldForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        name = request.json['name']
        description = request.json['description']
        notes = request.json['notes']
        landscape = request.json['landscape']
        natural_resources = request.json['natural_resources']
        seasons = request.json['seasons']
        weather = request.json['weather']
        animals = request.json['animals']
        plants = request.json['plants']

        if world:
            world.name = name
            world.description = description
            world.notes = notes
            world.landscape = landscape
            world.natural_resources = natural_resources
            world.seasons = seasons
            world.weather = weather
            world.animals = animals
            world.plants = plants

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

@world_routes.route('/new', methods=["POST"])
def create_world():
    form = CreateWorldForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        author_id = current_user.id
        book_id = request.json['book_id']
        name = request.json['name']
        description = request.json['description']
        notes = request.json['notes']
        landscape = request.json['landscape']
        natural_resources = request.json['natural_resources']
        seasons = request.json['seasons']
        weather = request.json['weather']
        animals = request.json['animals']
        plants = request.json['plants']

        new_world = World(
            author_id=author_id,
            book_id=book_id,
            name=name,
            description=description,
            notes=notes,
            landscape=landscape,
            natural_resources=natural_resources,
            seasons=seasons,
            weather=weather,
            animals=animals,
            plants=plants
        )

        db.session.add(new_world)
        db.session.commit()
        return new_world.to_dict()
    return { 'errors': validation_errors_to_error_messages(form.errors) }, 401
