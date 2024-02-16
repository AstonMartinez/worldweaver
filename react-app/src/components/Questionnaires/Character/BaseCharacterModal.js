import { useState } from "react";
import BasicsQuestions from "./BasicsQuestions";
import BookSelect from "./BookSelect";
import ConflictQuestions from "./ConflictQuestions";
import DailyLifeQuestions from "./DailyLifeQuestions";
import FavoritesQuestions from "./FavoritesQuestions";
import FriendsFamilyQuestions from "./FriendsFamilyQuestions";
import LoveQuestions from "./LoveQuestions";
import MiscQuestions from "./MiscQuestions";
import NavDots from "./NavDots";
import SubmitPage from "./SubmitPage";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const BaseChapterModal = () => {
  const [questionnaireData, setQuestionnaireData] = useState({
    bookId: null,
    characterId: null,
    appearance: {},
    basics: {},
    conflict: {},
    dailyLife: {},
    favorites: {},
    friendsAndFamily: {},
    love: {},
    miscellaneous: {},
    pastAndFuture: {},
    personality: {},
    possessions: {},
    spirituality: {},
    values: {},
    workAndHobbies: {},
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
        <h2>Create a New Character Questionnaire</h2>
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
          <ChapterSelect
            bookId={questionnaireData.bookId}
            setChar={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                characterId: data.id,
              }));
            }}
          />
        )}
        {modalPage === 3 && (
          <BasicsQuestions
            setBasics={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, basics: data }));
            }}
          />
        )}
        {modalPage === 4 && (
          <ConflictQuestions
            setConflict={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, conflict: data }));
            }}
          />
        )}
        {modalPage === 5 && (
          <DailyLifeQuestions
            setDaily={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, dailyLife: data }));
            }}
          />
        )}
        {modalPage === 6 && (
          <FavoritesQuestions
            setFaves={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, favorites: data }));
            }}
          />
        )}
        {modalPage === 7 && (
          <FriendsFamilyQuestions
            setFF={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                friendsAndFamily: data,
              }));
            }}
          />
        )}
        {modalPage === 8 && (
          <LoveQuestions
            setLove={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, love: data }));
            }}
          />
        )}
        {modalPage === 9 && (
          <MiscQuestions
            setMisc={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                miscellaneous: data,
              }));
            }}
          />
        )}
        {modalPage === 17 && (
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

export default BaseChapterModal;
