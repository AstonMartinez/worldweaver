import bookBeginning from "./BookBeginnings";
import bookGoals from "./BookGoals";
import bookMotivations from "./BookMotivations";
import bookConflict from "./BookConflicts";
import bookPlotSetting from "./BookPlotSetting";
import bookUnknowns from "./BookUnknowns";
import bookMiddle from "./BookMiddles";
import bookEnding from "./BookEnding";
import bookTurningPoints from "./BookTurningPoints";
import bookComedy from "./BookComedy";
import bookOvercomingMonster from "./BookOvercomingMonster";
import bookQuest from "./BookQuest";
import bookRagsRiches from "./BookRagsRiches";
import bookRebirth from "./BookRebirth";
import bookTragedy from "./BookTragedy";
import bookVoyageReturn from "./BookVoyageReturn";

const BookQuestionnaire = {
  Goals: bookGoals,
  Motivations: bookMotivations,
  "Plot & Setting": bookPlotSetting,
  Conflicts: bookConflict,
  "Mystery & Unknowns": bookUnknowns,
  "Beginning & Inciting Incidents": bookBeginning,
  "Turning Points & Reversals": bookTurningPoints,
  Middle: bookMiddle,
  Ending: bookEnding,
  "Rags to Riches": bookRagsRiches,
  "Overcoming the Monster": bookOvercomingMonster,
  "Voyage & Return": bookVoyageReturn,
  "The Quest": bookQuest,
  Comedy: bookComedy,
  Tragedy: bookTragedy,
  Rebirth: bookRebirth,
};

export default BookQuestionnaire;
