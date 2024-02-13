from flask import Blueprint, jsonify, session, request
from app.models import db
from app.models.book_questionnaire import BookQuestionnaire
from app.models.chapter_questionnaire import ChapterQuestionnaire
from app.models.character_questionnaire import CharacterQuestionnaire
from app.models.event_questionnaire import EventQuestionnaire
from app.models.faction_questionnaire import FactionQuestionnaire
from app.models.location_questionnaire import LocationQuestionnaire
from app.models.magic_questionnaire import MagicQuestionnaire
from app.models.race_questionnaire import RaceQuestionnaire
from app.models.world_questionnaire import WorldQuestionnaire
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages

questionnaire_routes = Blueprint('questionnaires', __name__)

# BOOK QUESTIONNAIRE ROUTES
@questionnaire_routes.route('/book/new/goals', methods=['POST'])
def create_book_questionnaire():
    author_id = current_user.id
    book_id = request.json['book_id']
    goals_one = request.json['goals_one']
    goals_two = request.json['goals_two']
    goals_three = request.json['goals_three']
    goals_four = request.json['goals_four']
    goals_five = request.json['goals_five']
    goals_six = request.json['goals_six']
    goals_seven = request.json['goals_seven']
    goals_eight = request.json['goals_eight']
    goals_nine = request.json['goals_nine']
