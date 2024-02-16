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
import PastFutureQuestions from "./PastFutureQuestions";
import PersonalityQuestions from "./PersonalityQuestions";
import PossessionsQuestions from "./PossessionsQuestions";
import SpiritualityQuestions from "./SpiritualityQuestions";
import ValuesQuestions from "./ValuesQuestions";
import AppearanceQuestions from "./AppearanceQuestions";
import WorkHobbiesQuestions from "./WorkHobbiesQuestions";
import CharacterSelect from "./CharacterSelect";

const BaseCharacterModal = () => {
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
          <CharacterSelect
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
          <AppearanceQuestions
            setAppear={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                appearance: data,
              }));
            }}
          />
        )}
        {modalPage === 4 && (
          <BasicsQuestions
            setBasics={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, basics: data }));
            }}
          />
        )}
        {modalPage === 5 && (
          <ConflictQuestions
            setConflict={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, conflict: data }));
            }}
          />
        )}
        {modalPage === 6 && (
          <DailyLifeQuestions
            setDaily={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, dailyLife: data }));
            }}
          />
        )}
        {modalPage === 7 && (
          <FavoritesQuestions
            setFaves={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, favorites: data }));
            }}
          />
        )}
        {modalPage === 8 && (
          <FriendsFamilyQuestions
            setFF={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                friendsAndFamily: data,
              }));
            }}
          />
        )}
        {modalPage === 9 && (
          <LoveQuestions
            setLove={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, love: data }));
            }}
          />
        )}
        {modalPage === 10 && (
          <MiscQuestions
            setMisc={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                miscellaneous: data,
              }));
            }}
          />
        )}
        {modalPage === 11 && (
          <PastFutureQuestions
            setPastFuture={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                pastAndFuture: data,
              }));
            }}
          />
        )}
        {modalPage === 12 && (
          <PersonalityQuestions
            setPersonality={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                personality: data,
              }));
            }}
          />
        )}
        {modalPage === 13 && (
          <PossessionsQuestions
            setPossess={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                possessions: data,
              }));
            }}
          />
        )}
        {modalPage === 14 && (
          <SpiritualityQuestions
            setSpirit={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                spirituality: data,
              }));
            }}
          />
        )}
        {modalPage === 15 && (
          <ValuesQuestions
            setValues={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                values: data,
              }));
            }}
          />
        )}
        {modalPage === 16 && (
          <WorkHobbiesQuestions
            setWH={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                workAndHobbies: data,
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

export default BaseCharacterModal;
