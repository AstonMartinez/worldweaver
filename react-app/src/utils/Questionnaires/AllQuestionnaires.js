import BookQuestionnaire from "./Book/Combined";
import ChapterQuestionnaire from "./Chapter/Combined";
import CharacterQuestionnaire from "./Character/Combined";
import EventQuestionnaire from "./Event/Combined";
import FactionQuestionnaire from "./Faction/Combined";
import LocationQuestionnaire from "./Location/Combined";
import MagicQuestionnaire from "./Magic/Combined";
import RaceQuestionnaire from "./Race/Combined";
import WorldQuestionnaire from "./World/Combined";

const AllQuestionnaires = {
  "Story & Plot": BookQuestionnaire,
  "Chapter Plot": ChapterQuestionnaire,
  Character: CharacterQuestionnaire,
  "Story Event": EventQuestionnaire,
  Faction: FactionQuestionnaire,
  Location: LocationQuestionnaire,
  Magic: MagicQuestionnaire,
  "Race / Species": RaceQuestionnaire,
  Worldbuilding: WorldQuestionnaire,
};

export default AllQuestionnaires;
