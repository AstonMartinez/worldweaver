import raceAge from "./RaceAge";
import raceAppearance from "./RaceAppearance";
import raceArchitecture from "./RaceArchitecture";
import raceArt from "./RaceArt";
import raceBiology from "./RaceBiology";
import raceCalendar from "./RaceCalendar";
import raceGender from "./RaceGender";
import raceHistory from "./RaceHistory";
import raceLanguage from "./RaceLanguage";
import raceLiterature from "./RaceLiterature";
import raceLocation from "./RaceLocation";
import raceManners from "./RaceManners";
import raceMentalSpiritualEmotional from "./RaceMentalSpiritualEmotional";
import racePhysical from "./RacePhysical";

const RaceQuestionnaire = {
  Aging: raceAge,
  Appearance: raceAppearance,
  Architecture: raceArchitecture,
  Art: raceArt,
  Biology: raceBiology,
  Calendar: raceCalendar,
  Gender: raceGender,
  History: raceHistory,
  Language: raceLanguage,
  Literature: raceLiterature,
  Location: raceLocation,
  Manners: raceManners,
  "Mental, Spiritual, and Emotional": raceMentalSpiritualEmotional,
  "Physical Features": racePhysical,
};

export default RaceQuestionnaire;
