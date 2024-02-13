import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserBooks } from "../../../store/books";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import GoalsQuestions from "./GoalsQuestions";
import MotivationsQuestions from "./MotivationsQuestions";
import ConflictQuestions from "./ConflictQuestions";
import PlotQuestions from "./PlotQuestions";
import UnknownsQuestions from "./UnknownsQuestions";
import BeginningQuestions from "./BeginningQuestions";
import MiddleQuestions from "./MiddleQuestions";
import EndQuestions from "./EndQuestions";
import TurningPointQuestions from "./TurningPointsQuestions";
import RagsToRichesQuestions from "./RagsToRichesQuestions";
import OvercomingMonsterQuestions from "./OvercomingMonsterQuestions";
import VoyageQuestions from "./VoyageQuestions";
import QuestQuestions from "./QuestQuestions";
import ComedyQuestions from "./ComedyQuestions";
import TragedyQuestions from "./TragedyQuestions";
import RebirthQuestions from "./RebirthQuestions";
import SubmitPage from "./SubmitPage";
import NavDots from "./NavDots";

const BaseBookModal = () => {
  const [modalPage, setModalPage] = useState(1);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const [questionnaireData, setQuestionnaireData] = useState({
    goals: {},
    motivations: {},
    conflict: {},
    plot: {},
    unknowns: {},
    beginning: {},
    middle: {},
    end: {},
    turningPoints: {},
    comedy: {},
    monsters: {},
    voyage: {},
    quest: {},
    tragedy: {},
    rebirth: {},
    ragsToRiches: {},
  });

  console.log(questionnaireData.goals);

  const dispatch = useDispatch();
  const userBooks = useSelector((state) => state.books.allBooks);

  useEffect(() => {
    dispatch(fetchUserBooks());
  }, [dispatch]);

  const incrementPage = (num) => {
    if (num + 1 > 18) return;
    setModalPage(num + 1);
  };

  const decrementPage = (num) => {
    if (num - 1 < 1) return;
    setModalPage(num - 1);
  };
  return (
    <div>
      <div>
        <h2>Create a New Book Questionnaire</h2>
      </div>
      <div>
        {modalPage === 1 && (
          <>
            <div>
              <p>Which book would you like to create a questionnaire for?</p>
            </div>
            <div>
              {Object.values(userBooks).map((bk) => (
                <div onClick={() => setSelectedBookId(bk)}>{bk.title}</div>
              ))}
            </div>
          </>
        )}
        {modalPage === 2 && (
          <GoalsQuestions
            setGoals={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, goals: data }));
            }}
          />
        )}
        {modalPage === 3 && (
          <MotivationsQuestions
            setMotivations={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, motivations: data }));
            }}
          />
        )}
        {modalPage === 4 && (
          <PlotQuestions
            setPlot={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, plot: data }));
            }}
          />
        )}
        {modalPage === 5 && (
          <ConflictQuestions
            setConflicts={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, conflict: data }));
            }}
          />
        )}
        {modalPage === 6 && (
          <UnknownsQuestions
            setUnknowns={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, unknowns: data }));
            }}
          />
        )}
        {modalPage === 7 && (
          <TurningPointQuestions
            setTurningPoints={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                turningPoints: data,
              }));
            }}
          />
        )}
        {modalPage === 8 && (
          <BeginningQuestions
            setBeginning={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, beginning: data }));
            }}
          />
        )}
        {modalPage === 9 && (
          <MiddleQuestions
            setMiddle={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, middle: data }));
            }}
          />
        )}
        {modalPage === 10 && (
          <EndQuestions
            setEnd={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, end: data }));
            }}
          />
        )}
        {modalPage === 11 && (
          <RagsToRichesQuestions
            setRToR={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, ragsToRiches: data }));
            }}
          />
        )}
        {modalPage === 12 && (
          <OvercomingMonsterQuestions
            setOvercomingMonster={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, monsters: data }));
            }}
          />
        )}
        {modalPage === 13 && (
          <VoyageQuestions
            setVoyage={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, voyage: data }));
            }}
          />
        )}
        {modalPage === 14 && (
          <QuestQuestions
            setQuest={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, quest: data }));
            }}
          />
        )}
        {modalPage === 15 && (
          <ComedyQuestions
            setComedy={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, comedy: data }));
            }}
          />
        )}
        {modalPage === 16 && (
          <TragedyQuestions
            setTragedy={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, tragedy: data }));
            }}
          />
        )}
        {modalPage === 17 && (
          <RebirthQuestions
            setRebirth={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, rebirth: data }));
            }}
          />
        )}
        {modalPage === 18 && (
          <SubmitPage
            questionnaireData={questionnaireData}
            selectedBook={selectedBookId}
          />
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

export default BaseBookModal;
