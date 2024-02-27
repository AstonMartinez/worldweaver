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
@questionnaire_routes.route('/book/new', methods=['POST'])
def create_book_questionnaire():
    new_book_qstnr = BookQuestionnaire(
        author_id = current_user.id,
        book_id = request.json['book_id'],
        goals_one = request.json['goals_one'],
        goals_two = request.json['goals_two'],
        goals_three = request.json['goals_three'],
        goals_four = request.json['goals_four'],
        goals_five = request.json['goals_five'],
        goals_six = request.json['goals_six'],
        goals_seven = request.json['goals_seven'],
        goals_eight = request.json['goals_eight'],
        goals_nine = request.json['goals_nine'],
        motivations_one = request.json['motivations_one'],
        motivations_two = request.json['motivations_two'],
        motivations_three = request.json['motivations_three'],
        motivations_four = request.json['motivations_four'],
        motivations_five = request.json['motivations_five'],
        motivations_six = request.json['motivations_six'],
        motivations_seven = request.json['motivations_seven'],
        motivations_eight = request.json['motivations_eight'],
        motivations_nine = request.json['motivations_nine'],
        motivations_ten = request.json['motivations_ten'],
        conflict_one = request.json['conflict_one'],
        conflict_two = request.json['conflict_two'],
        conflict_three = request.json['conflict_three'],
        conflict_four = request.json['conflict_four'],
        conflict_five = request.json['conflict_five'],
        conflict_six = request.json['conflict_six'],
        conflict_seven = request.json['conflict_seven'],
        conflict_eight = request.json['conflict_eight'],
        conflict_nine = request.json['conflict_nine'],
        conflict_ten = request.json['conflict_ten'],
        plot_one = request.json['plot_one'],
        plot_two = request.json['plot_two'],
        plot_three = request.json['plot_three'],
        plot_four = request.json['plot_four'],
        plot_five = request.json['plot_five'],
        plot_six = request.json['plot_six'],
        plot_seven = request.json['plot_seven'],
        plot_eight = request.json['plot_eight'],
        plot_nine = request.json['plot_nine'],
        plot_ten = request.json['plot_ten'],
        plot_eleven = request.json['plot_eleven'],
        unknown_one = request.json['unknown_one'],
        unknown_two = request.json['unknown_two'],
        unknown_three = request.json['unknown_three'],
        unknown_four = request.json['unknown_four'],
        unknown_five = request.json['unknown_five'],
        unknown_six = request.json['unknown_six'],
        unknown_seven = request.json['unknown_seven'],
        unknown_eight = request.json['unknown_eight'],
        unknown_nine = request.json['unknown_nine'],
        unknown_ten = request.json['unknown_ten'],
        unknown_eleven = request.json['unknown_eleven'],
        unknown_twelve = request.json['unknown_twelve'],
        middle_one = request.json['middle_one'],
        middle_two = request.json['middle_two'],
        middle_three = request.json['middle_three'],
        middle_four = request.json['middle_four'],
        middle_five = request.json['middle_five'],
        middle_six = request.json['middle_six'],
        middle_seven = request.json['middle_seven'],
        middle_eight = request.json['middle_eight'],
        middle_nine = request.json['middle_nine'],
        middle_ten = request.json['middle_ten'],
        end_one = request.json['end_one'],
        end_two = request.json['end_two'],
        end_three = request.json['end_three'],
        end_four = request.json['end_four'],
        end_five = request.json['end_five'],
        end_six = request.json['end_six'],
        end_seven = request.json['end_seven'],
        end_eight = request.json['end_eight'],
        end_nine = request.json['end_nine'],
        end_ten = request.json['end_ten'],
        turning_one = request.json['turning_one'],
        turning_two = request.json['turning_two'],
        turning_three = request.json['turning_three'],
        turning_four = request.json['turning_four'],
        turning_five = request.json['turning_five'],
        turning_six = request.json['turning_six'],
        turning_seven = request.json['turning_seven'],
        turning_eight = request.json['turning_eight'],
        turning_nine = request.json['turning_nine'],
        turning_ten = request.json['turning_ten'],
        comedy_one = request.json['comedy_one'],
        comedy_two = request.json['comedy_two'],
        comedy_three = request.json['comedy_three'],
        comedy_four = request.json['comedy_four'],
        comedy_five = request.json['comedy_five'],
        comedy_six = request.json['comedy_six'],
        comedy_seven = request.json['comedy_seven'],
        comedy_eight = request.json['comedy_eight'],
        comedy_nine = request.json['comedy_nine'],
        comedy_ten = request.json['comedy_ten'],
        monster_one = request.json['monster_one'],
        monster_two = request.json['monster_two'],
        monster_three = request.json['monster_three'],
        monster_four = request.json['monster_four'],
        monster_five = request.json['monster_five'],
        monster_six = request.json['monster_six'],
        monster_seven = request.json['monster_seven'],
        monster_eight = request.json['monster_eight'],
        monster_nine = request.json['monster_nine'],
        monster_ten = request.json['monster_ten'],
        voyage_one = request.json['voyage_one'],
        voyage_two = request.json['voyage_two'],
        voyage_three = request.json['voyage_three'],
        voyage_four = request.json['voyage_four'],
        voyage_five = request.json['voyage_five'],
        voyage_six = request.json['voyage_six'],
        voyage_seven = request.json['voyage_seven'],
        voyage_eight = request.json['voyage_eight'],
        voyage_nine = request.json['voyage_nine'],
        voyage_ten = request.json['voyage_ten'],
        quest_one = request.json['quest_one'],
        quest_two = request.json['quest_two'],
        quest_three = request.json['quest_three'],
        quest_four = request.json['quest_four'],
        quest_five = request.json['quest_five'],
        quest_six = request.json['quest_six'],
        quest_seven = request.json['quest_seven'],
        quest_eight = request.json['quest_eight'],
        quest_nine = request.json['quest_nine'],
        quest_ten = request.json['quest_ten'],
        tragedy_one = request.json['tragedy_one'],
        tragedy_two = request.json['tragedy_two'],
        tragedy_three = request.json['tragedy_three'],
        tragedy_four = request.json['tragedy_four'],
        tragedy_five = request.json['tragedy_five'],
        tragedy_six = request.json['tragedy_six'],
        tragedy_seven = request.json['tragedy_seven'],
        tragedy_eight = request.json['tragedy_eight'],
        tragedy_nine = request.json['tragedy_nine'],
        tragedy_ten = request.json['tragedy_ten'],
        rebirth_one = request.json['rebirth_one'],
        rebirth_two = request.json['rebirth_two'],
        rebirth_three = request.json['rebirth_three'],
        rebirth_four = request.json['rebirth_four'],
        rebirth_five = request.json['rebirth_five'],
        rebirth_six = request.json['rebirth_six'],
        rebirth_seven = request.json['rebirth_seven'],
        rebirth_eight = request.json['rebirth_eight'],
        rebirth_nine = request.json['rebirth_nine'],
        rebirth_ten = request.json['rebirth_ten'],
        beginning_one = request.json['beginning_one'],
        beginning_two = request.json['beginning_two'],
        beginning_three = request.json['beginning_three'],
        beginning_four = request.json['beginning_four'],
        beginning_five = request.json['beginning_five'],
        beginning_six = request.json['beginning_six'],
        beginning_seven = request.json['beginning_seven'],
        beginning_eight = request.json['beginning_eight'],
        beginning_nine = request.json['beginning_nine'],
        beginning_ten = request.json['beginning_ten'],
        rags_one = request.json['rags_one'],
        rags_two = request.json['rags_two'],
        rags_three = request.json['rags_three'],
        rags_four = request.json['rags_four'],
        rags_five = request.json['rags_five'],
        rags_six = request.json['rags_six'],
        rags_seven = request.json['rags_seven'],
        rags_eight = request.json['rags_eight'],
        rags_nine = request.json['rags_nine'],
        rags_ten = request.json['rags_ten']
    )

    db.session.add(new_book_qstnr)
    db.session.commit()
    return new_book_qstnr.to_dict()

@questionnaire_routes.route('/book/<int:qId>/update', methods=['PUT'])
def update_book_questionnaire(qId):
    questionnaire = BookQuestionnaire.query.get(qId)
    questionnaire.goals_one = request.json['goals_one']
    questionnaire.goals_two = request.json['goals_two']
    questionnaire.goals_three = request.json['goals_three']
    questionnaire.goals_four = request.json['goals_four']
    questionnaire.goals_five = request.json['goals_five']
    questionnaire.goals_six = request.json['goals_six']
    questionnaire.goals_seven = request.json['goals_seven']
    questionnaire.goals_eight = request.json['goals_eight']
    questionnaire.goals_nine = request.json['goals_nine']
    questionnaire.motivations_one = request.json['motivations_one']
    questionnaire.motivations_two = request.json['motivations_two']
    questionnaire.motivations_three = request.json['motivations_three']
    questionnaire.motivations_four = request.json['motivations_four']
    questionnaire.motivations_five = request.json['motivations_five']
    questionnaire.motivations_six = request.json['motivations_six']
    questionnaire.motivations_seven = request.json['motivations_seven']
    questionnaire.motivations_eight = request.json['motivations_eight']
    questionnaire.motivations_nine = request.json['motivations_nine']
    questionnaire.motivations_ten = request.json['motivations_ten']
    questionnaire.conflict_one = request.json['conflict_one']
    questionnaire.conflict_two = request.json['conflict_two']
    questionnaire.conflict_three = request.json['conflict_three']
    questionnaire.conflict_four = request.json['conflict_four']
    questionnaire.conflict_five = request.json['conflict_five']
    questionnaire.conflict_six = request.json['conflict_six']
    questionnaire.conflict_seven = request.json['conflict_seven']
    questionnaire.conflict_eight = request.json['conflict_eight']
    questionnaire.conflict_nine = request.json['conflict_nine']
    questionnaire.conflict_ten = request.json['conflict_ten']
    questionnaire.plot_one = request.json['plot_one']
    questionnaire.plot_two = request.json['plot_two']
    questionnaire.plot_three = request.json['plot_three']
    questionnaire.plot_four = request.json['plot_four']
    questionnaire.plot_five = request.json['plot_five']
    questionnaire.plot_six = request.json['plot_six']
    questionnaire.plot_seven = request.json['plot_seven']
    questionnaire.plot_eight = request.json['plot_eight']
    questionnaire.plot_nine = request.json['plot_nine']
    questionnaire.plot_ten = request.json['plot_ten']
    questionnaire.plot_eleven = request.json['plot_eleven']
    questionnaire.unknown_one = request.json['unknown_one']
    questionnaire.unknown_two = request.json['unknown_two']
    questionnaire.unknown_three = request.json['unknown_three']
    questionnaire.unknown_four = request.json['unknown_four']
    questionnaire.unknown_five = request.json['unknown_five']
    questionnaire.unknown_six = request.json['unknown_six']
    questionnaire.unknown_seven = request.json['unknown_seven']
    questionnaire.unknown_eight = request.json['unknown_eight']
    questionnaire.unknown_nine = request.json['unknown_nine']
    questionnaire.unknown_ten = request.json['unknown_ten']
    questionnaire.unknown_eleven = request.json['unknown_eleven']
    questionnaire.unknown_twelve = request.json['unknown_twelve']
    questionnaire.middle_one = request.json['middle_one']
    questionnaire.middle_two = request.json['middle_two']
    questionnaire.middle_three = request.json['middle_three']
    questionnaire.middle_four = request.json['middle_four']
    questionnaire.middle_five = request.json['middle_five']
    questionnaire.middle_six = request.json['middle_six']
    questionnaire.middle_seven = request.json['middle_seven']
    questionnaire.middle_eight = request.json['middle_eight']
    questionnaire.middle_nine = request.json['middle_nine']
    questionnaire.middle_ten = request.json['middle_ten']
    questionnaire.end_one = request.json['end_one']
    questionnaire.end_two = request.json['end_two']
    questionnaire.end_three = request.json['end_three']
    questionnaire.end_four = request.json['end_four']
    questionnaire.end_five = request.json['end_five']
    questionnaire.end_six = request.json['end_six']
    questionnaire.end_seven = request.json['end_seven']
    questionnaire.end_eight = request.json['end_eight']
    questionnaire.end_nine = request.json['end_nine']
    questionnaire.end_ten = request.json['end_ten']
    questionnaire.turning_one = request.json['turning_one']
    questionnaire.turning_two = request.json['turning_two']
    questionnaire.turning_three = request.json['turning_three']
    questionnaire.turning_four = request.json['turning_four']
    questionnaire.turning_five = request.json['turning_five']
    questionnaire.turning_six = request.json['turning_six']
    questionnaire.turning_seven = request.json['turning_seven']
    questionnaire.turning_eight = request.json['turning_eight']
    questionnaire.turning_nine = request.json['turning_nine']
    questionnaire.turning_ten = request.json['turning_ten']
    questionnaire.comedy_one = request.json['comedy_one']
    questionnaire.comedy_two = request.json['comedy_two']
    questionnaire.comedy_three = request.json['comedy_three']
    questionnaire.comedy_four = request.json['comedy_four']
    questionnaire.comedy_five = request.json['comedy_five']
    questionnaire.comedy_six = request.json['comedy_six']
    questionnaire.comedy_seven = request.json['comedy_seven']
    questionnaire.comedy_eight = request.json['comedy_eight']
    questionnaire.comedy_nine = request.json['comedy_nine']
    questionnaire.comedy_ten = request.json['comedy_ten']
    questionnaire.monster_one = request.json['monster_one']
    questionnaire.monster_two = request.json['monster_two']
    questionnaire.monster_three = request.json['monster_three']
    questionnaire.monster_four = request.json['monster_four']
    questionnaire.monster_five = request.json['monster_five']
    questionnaire.monster_six = request.json['monster_six']
    questionnaire.monster_seven = request.json['monster_seven']
    questionnaire.monster_eight = request.json['monster_eight']
    questionnaire.monster_nine = request.json['monster_nine']
    questionnaire.monster_ten = request.json['monster_ten']
    questionnaire.voyage_one = request.json['voyage_one']
    questionnaire.voyage_two = request.json['voyage_two']
    questionnaire.voyage_three = request.json['voyage_three']
    questionnaire.voyage_four = request.json['voyage_four']
    questionnaire.voyage_five = request.json['voyage_five']
    questionnaire.voyage_six = request.json['voyage_six']
    questionnaire.voyage_seven = request.json['voyage_seven']
    questionnaire.voyage_eight = request.json['voyage_eight']
    questionnaire.voyage_nine = request.json['voyage_nine']
    questionnaire.voyage_ten = request.json['voyage_ten']
    questionnaire.quest_one = request.json['quest_one']
    questionnaire.quest_two = request.json['quest_two']
    questionnaire.quest_three = request.json['quest_three']
    questionnaire.quest_four = request.json['quest_four']
    questionnaire.quest_five = request.json['quest_five']
    questionnaire.quest_six = request.json['quest_six']
    questionnaire.quest_seven = request.json['quest_seven']
    questionnaire.quest_eight = request.json['quest_eight']
    questionnaire.quest_nine = request.json['quest_nine']
    questionnaire.quest_ten = request.json['quest_ten']
    questionnaire.tragedy_one = request.json['tragedy_one']
    questionnaire.tragedy_two = request.json['tragedy_two']
    questionnaire.tragedy_three = request.json['tragedy_three']
    questionnaire.tragedy_four = request.json['tragedy_four']
    questionnaire.tragedy_five = request.json['tragedy_five']
    questionnaire.tragedy_six = request.json['tragedy_six']
    questionnaire.tragedy_seven = request.json['tragedy_seven']
    questionnaire.tragedy_eight = request.json['tragedy_eight']
    questionnaire.tragedy_nine = request.json['tragedy_nine']
    questionnaire.tragedy_ten = request.json['tragedy_ten']
    questionnaire.rebirth_one = request.json['rebirth_one']
    questionnaire.rebirth_two = request.json['rebirth_two']
    questionnaire.rebirth_three = request.json['rebirth_three']
    questionnaire.rebirth_four = request.json['rebirth_four']
    questionnaire.rebirth_five = request.json['rebirth_five']
    questionnaire.rebirth_six = request.json['rebirth_six']
    questionnaire.rebirth_seven = request.json['rebirth_seven']
    questionnaire.rebirth_eight = request.json['rebirth_eight']
    questionnaire.rebirth_nine = request.json['rebirth_nine']
    questionnaire.rebirth_ten = request.json['rebirth_ten']
    questionnaire.beginning_one = request.json['beginning_one']
    questionnaire.beginning_two = request.json['beginning_two']
    questionnaire.beginning_three = request.json['beginning_three']
    questionnaire.beginning_four = request.json['beginning_four']
    questionnaire.beginning_five = request.json['beginning_five']
    questionnaire.beginning_six = request.json['beginning_six']
    questionnaire.beginning_seven = request.json['beginning_seven']
    questionnaire.beginning_eight = request.json['beginning_eight']
    questionnaire.beginning_nine = request.json['beginning_nine']
    questionnaire.beginning_ten = request.json['beginning_ten']
    questionnaire.rags_one = request.json['rags_one']
    questionnaire.rags_two = request.json['rags_two']
    questionnaire.rags_three = request.json['rags_three']
    questionnaire.rags_four = request.json['rags_four']
    questionnaire.rags_five = request.json['rags_five']
    questionnaire.rags_six = request.json['rags_six']
    questionnaire.rags_seven = request.json['rags_seven']
    questionnaire.rags_eight = request.json['rags_eight']
    questionnaire.rags_nine = request.json['rags_nine']
    questionnaire.rags_ten = request.json['rags_ten']
