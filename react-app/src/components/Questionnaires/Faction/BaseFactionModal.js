import { useState } from "react";
import BookSelect from "./BookSelect";
import NavDots from "./NavDots";
import SubmitPage from "./SubmitPage";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import GoalsQuestions from "./GoalsQuestions";
import HistoryQuestions from "./HistoryQuestions";
import RanksQuestions from "./RanksQuestions";
import RedTapeQuestions from "./RedTapeQuestions";
import ReputationQuestions from "./ReputationQuestions.js";
import TitleQuestions from "./TitleQuestions";
import TurfQuestions from "./TurfQuestions";

const BaseFactionModal = () => {
  const [questionnaireData, setQuestionnaireData] = useState({
    bookId: null,
    goals: {},
    history: {},
    titles: {},
    ranks: {},
    redTape: {},
    reputation: {},
    turf: {},
  });

  const [modalPage, setModalPage] = useState(1);

  const incrementPage = (num) => {
    if (num + 1 > 9) return;
    setModalPage(num + 1);
  };

  const decrementPage = (num) => {
    if (num - 1 < 1) return;
    setModalPage(num - 1);
  };

  return (
    <div>
      <div>
        <h2>Create a New Faction Questionnaire</h2>
      </div>
      <div>
        {modalPage === 1 && (
          <BookSelect
            setBook={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, bookId: data.id }));
            }}
          />
        )}
        {modalPage === 2 && (
          <GoalsQuestions
            bookId={questionnaireData.bookId}
            setGoals={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                goals: data,
              }));
            }}
          />
        )}
        {modalPage === 3 && (
          <HistoryQuestions
            setHistory={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                history: data,
              }));
            }}
          />
        )}
        {modalPage === 4 && (
          <TitleQuestions
            setTitles={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, titles: data }));
            }}
          />
        )}
        {modalPage === 5 && (
          <RanksQuestions
            setRanks={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, ranks: data }));
            }}
          />
        )}
        {modalPage === 6 && (
          <RedTapeQuestions
            setRT={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, redTape: data }));
            }}
          />
        )}
        {modalPage === 7 && (
          <ReputationQuestions
            setReputation={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, reputation: data }));
            }}
          />
        )}
        {modalPage === 8 && (
          <TurfQuestions
            setTurf={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, turf: data }));
            }}
          />
        )}
        {modalPage === 9 && (
          <SubmitPage questionnaireData={questionnaireData} />
        )}
      </div>
      <div>
        <NavDots pageNum={modalPage} />
      </div>
      <div>
        <div>
          <IoIosArrowBack
            height={18}
            width={18}
            onClick={() => decrementPage(modalPage)}
          />
        </div>
        <div></div>
        <div>
          <IoIosArrowForward
            height={18}
            width={18}
            onClick={() => incrementPage(modalPage)}
          />
        </div>
      </div>
    </div>
  );
};

export default BaseFactionModal;
