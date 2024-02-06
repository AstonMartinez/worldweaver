import characterAppearance from "./CharacterAppearance";
import characterBasics from "./CharacterBasics";
import characterConflict from "./CharacterConflict";
import characterDailyLife from "./CharacterDailyLife";
import characterFavorites from "./CharacterFavorites";
import characterFriendsFamily from "./CharacterFriendsFamily";
import characterLove from "./CharacterLove";
import characterMisc from "./CharacterMiscellaneous";
import characterPastFuture from "./CharacterPastFuture";
import characterPersonality from "./CharacterPersonality";
import characterPossessions from "./CharacterPossessions";
import characterSpirituality from "./CharacterSpirituality";
import characterValues from "./CharacterValues";
import characterWorkHobbies from "./CharacterWorkHobbies";

const CharacterQuestionnaire = {
  Appearance: characterAppearance,
  Basics: characterBasics,
  Conflict: characterConflict,
  "Daily Life": characterDailyLife,
  Favorites: characterFavorites,
  "Friends & Family": characterFriendsFamily,
  Love: characterLove,
  Miscellaneous: characterMisc,
  "Past & Future": characterPastFuture,
  Personality: characterPersonality,
  Possessions: characterPossessions,
  Spirituality: characterSpirituality,
  Values: characterValues,
  "Work & Hobbies": characterWorkHobbies,
};

export default CharacterQuestionnaire;
