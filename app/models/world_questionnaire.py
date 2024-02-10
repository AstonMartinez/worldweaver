from .db import db, environment, SCHEMA, add_prefix_for_prod


class WorldQuestionnaire(db.Model):
    __tablename__ = 'world_questionnaires'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("books.id"), ondelete="CASCADE"), nullable=False)
    ag_one = db.Column(db.String(5000))
    ag_two = db.Column(db.String(5000))
    ag_three = db.Column(db.String(5000))
    ag_four = db.Column(db.String(5000))
    animals_one = db.Column(db.String(5000))
    animals_two = db.Column(db.String(5000))
    animals_three = db.Column(db.String(5000))
    animals_four = db.Column(db.String(5000))
    animals_five = db.Column(db.String(5000))
    animals_six = db.Column(db.String(5000))
    animals_seven = db.Column(db.String(5000))
    architecture_one = db.Column(db.String(5000))
    architecture_two = db.Column(db.String(5000))
    architecture_three = db.Column(db.String(5000))
    art_one = db.Column(db.String(5000))
    art_two = db.Column(db.String(5000))
    art_three = db.Column(db.String(5000))
    art_four = db.Column(db.String(5000))
    astronomy_one = db.Column(db.String(5000))
    astronomy_two = db.Column(db.String(5000))
    astronomy_three = db.Column(db.String(5000))
    astronomy_four = db.Column(db.String(5000))
    astronomoy_five = db.Column(db.String(5000))
    astronomy_six = db.Column(db.String(5000))
    climate_one = db.Column(db.String(5000))
    climate_two = db.Column(db.String(5000))
    clothing_one = db.Column(db.String(5000))
    clothing_two = db.Column(db.String(5000))
    clothing_three = db.Column(db.String(5000))
    conflict_one = db.Column(db.String(5000))
    conflict_two = db.Column(db.String(5000))
    conflict_three = db.Column(db.String(5000))
    conflict_four = db.Column(db.String(5000))
    conflict_five = db.Column(db.String(5000))
    conflict_six = db.Column(db.String(5000))
    conflict_seven = db.Column(db.String(5000))
    conflict_eight = db.Column(db.String(5000))
    conflict_nine = db.Column(db.String(5000))
    conflict_ten = db.Column(db.String(5000))
    conflict_eleven = db.Column(db.String(5000))
    countries_one = db.Column(db.String(5000))
    countries_two = db.Column(db.String(5000))
    countries_three = db.Column(db.String(5000))
    culture_one = db.Column(db.String(5000))
    culture_two = db.Column(db.String(5000))
    culture_three = db.Column(db.String(5000))
    culture_four = db.Column(db.String(5000))
    education_one = db.Column(db.String(5000))
    education_two = db.Column(db.String(5000))
    education_three = db.Column(db.String(5000))
    education_four = db.Column(db.String(5000))
    education_five = db.Column(db.String(5000))
    education_six = db.Column(db.String(5000))
    education_seven = db.Column(db.String(5000))
    education_eight = db.Column(db.String(5000))
    employment_one = db.Column(db.String(5000))
    employment_two = db.Column(db.String(5000))
    employment_three = db.Column(db.String(5000))
    employment_four = db.Column(db.String(5000))
    employment_five = db.Column(db.String(5000))
    employment_six = db.Column(db.String(5000))
    entertainment_one = db.Column(db.String(5000))
    entertainment_two = db.Column(db.String(5000))
    entertainment_three = db.Column(db.String(5000))
    entertainment_four = db.Column(db.String(5000))
    entertainment_five = db.Column(db.String(5000))
    entertainment_six = db.Column(db.String(5000))
    entertainment_seven = db.Column(db.String(5000))
    food_one = db.Column(db.String(5000))
    food_two = db.Column(db.String(5000))
    food_three = db.Column(db.String(5000))
    food_four = db.Column(db.String(5000))
    food_five = db.Column(db.String(5000))
    food_six = db.Column(db.String(5000))
    food_seven = db.Column(db.String(5000))
    food_eight = db.Column(db.String(5000))
    food_nine = db.Column(db.String(5000))
    food_ten = db.Column(db.String(5000))
    food_eleven = db.Column(db.String(5000))
    food_twelve = db.Column(db.String(5000))
    food_thirteen = db.Column(db.String(5000))
    landscape_one = db.Column(db.String(5000))
    landscape_two = db.Column(db.String(5000))
    landscape_three = db.Column(db.String(5000))
    landscape_four = db.Column(db.String(5000))
    landscape_five = db.Column(db.String(5000))
    landscape_six = db.Column(db.String(5000))
    language_one = db.Column(db.String(5000))
    language_two = db.Column(db.String(5000))
    language_three = db.Column(db.String(5000))
    resources_one = db.Column(db.String(5000))
    resources_two = db.Column(db.String(5000))
    resources_three = db.Column(db.String(5000))
    plants_one = db.Column(db.String(5000))
    plants_two = db.Column(db.String(5000))
    pop_one = db.Column(db.String(5000))
    pop_two = db.Column(db.String(5000))
    pop_three = db.Column(db.String(5000))
    pop_four = db.Column(db.String(5000))
    pop_five = db.Column(db.String(5000))
    pop_six = db.Column(db.String(5000))
    pop_seven = db.Column(db.String(5000))
    pop_eight = db.Column(db.String(5000))
    pop_nine = db.Column(db.String(5000))
    pop_ten = db.Column(db.String(5000))
    pop_eleven = db.Column(db.String(5000))
    pop_twelve = db.Column(db.String(5000))
    pop_thirteen = db.Column(db.String(5000))
    pop_fourteen = db.Column(db.String(5000))
    pop_fifteen = db.Column(db.String(5000))
    pop_sixteen = db.Column(db.String(5000))
    pop_seventeen = db.Column(db.String(5000))
    pop_eighteen = db.Column(db.String(5000))
    religion_one = db.Column(db.String(5000))
    religion_two = db.Column(db.String(5000))
    religion_three = db.Column(db.String(5000))
    religion_four = db.Column(db.String(5000))
    religion_five = db.Column(db.String(5000))
    religion_six = db.Column(db.String(5000))
    science_one = db.Column(db.String(5000))
    science_two = db.Column(db.String(5000))
    science_three = db.Column(db.String(5000))
    seasons_one = db.Column(db.String(5000))
    seasons_two = db.Column(db.String(5000))
    seasons_three = db.Column(db.String(5000))
    social_one = db.Column(db.String(5000))
    social_two = db.Column(db.String(5000))
    social_three = db.Column(db.String(5000))
    social_four = db.Column(db.String(5000))
    social_five = db.Column(db.String(5000))
    social_six = db.Column(db.String(5000))
    social_seven = db.Column(db.String(5000))
    social_eight = db.Column(db.String(5000))
    social_nine = db.Column(db.String(5000))
    socy_one = db.Column(db.String(5000))
    socy_two = db.Column(db.String(5000))
    socy_three = db.Column(db.String(5000))
    socy_four = db.Column(db.String(5000))
    socy_five = db.Column(db.String(5000))
    socy_six = db.Column(db.String(5000))
    socy_seven = db.Column(db.String(5000))
    trade_one = db.Column(db.String(5000))
    trade_two = db.Column(db.String(5000))
    trade_three = db.Column(db.String(5000))
    trade_four = db.Column(db.String(5000))
    weather_one = db.Column(db.String(5000))
    weather_two = db.Column(db.String(5000))
    weather_three = db.Column(db.String(5000))

    def to_dict(self):
        return {
            'id': self.id,
            'author_id': self.author_id,
            'book_id': self.book_id,
            'agriculture': [self.ag_one, self.ag_two, self.ag_three, self.ag_four],
            'animals': [self.animals_one, self.animals_two, self.animals_three, self.animals_four, self.animals_five, self.animals_six, self.animals_seven],
            'architecture': [self.architecture_one, self.architecture_two, self.architecture_three],
            'art': [self.art_one, self.art_two, self.art_three, self.art_four],
            'astronomy_planets': [self.astronomy_one, self.astronomy_two, self.astronomy_three, self.astronomy_four, self.astronomoy_five, self.astronomy_six],
            'climate': [self.climate_one, self.climate_two],
            'clothing_fashion': [self.clothing_one, self.clothing_two, self.clothing_three],
            'conflict': [self.conflict_one, self.conflict_two, self.conflict_three, self.conflict_four, self.conflict_five, self.conflict_six, self.conflict_seven, self.conflict_eight, self.conflict_nine, self.conflict_ten, self.conflict_eleven],
            'continents_countries': [self.countries_one, self.countries_two, self.countries_three],
            'culture': [self.culture_one, self.culture_two, self.culture_three, self.culture_four],
            'education': [self.education_one, self.education_two, self.education_three, self.education_four, self.education_five, self.education_six, self.education_seven, self.education_eight],
            'employment': [self.employment_one, self.employment_two, self.employment_three, self.employment_four, self.employment_five, self.employment_six],
            'entertainment': [self.entertainment_one, self.entertainment_two, self.entertainment_three, self.entertainment_four, self.entertainment_five, self.entertainment_six, self.entertainment_seven],
            'food': [self.food_one, self.food_two, self.food_three, self.food_four, self.food_five, self.food_six, self.food_seven, self.food_eight, self.food_nine, self.food_ten, self.food_eleven, self.food_twelve, self.food_thirteen],
            'landscape': [self.landscape_one, self.landscape_two, self.landscape_three, self.landscape_four, self.landscape_five, self.landscape_six],
            'language': [self.language_one, self.language_two, self.language_three],
            'natural_resources': [self.resources_one, self.resources_two, self.resources_three],
            'plants': [self.plants_one, self.plants_two],
            'population_politics': [self.pop_one, self.pop_two, self.pop_three, self.pop_four, self.pop_five, self.pop_six, self.pop_seven, self.pop_eight, self.pop_nine, self.pop_ten, self.pop_eleven, self.pop_twelve, self.pop_thirteen, self.pop_fourteen, self.pop_fifteen, self.pop_sixteen, self.pop_seventeen, self.pop_eighteen],
            'religion_spirituality': [self.religion_one, self.religion_two, self.religion_three, self.religion_four, self.religion_five, self.religion_six],
            'science_technology': [self.science_one, self.science_two, self.science_three],
            'seasons': [self.seasons_one, self.seasons_two, self.seasons_three],
            'social_rules': [self.social_one, self.social_two, self.social_three, self.social_four, self.social_five, self.social_six, self.social_seven, self.social_eight, self.social_nine],
            'socioeconomics': [self.socy_one, self.socy_two, self.socy_three, self.socy_four, self.socy_five, self.socy_six, self.socy_seven],
            'trade': [self.trade_one, self.trade_two, self.trade_three, self.trade_four],
            'weather': [self.weather_one, self.weather_two, self.weather_three]
        }
