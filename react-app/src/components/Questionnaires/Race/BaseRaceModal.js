import { useState } from "react";
import BookSelect from "./BookSelect";
import NavDots from "./NavDots";
import SubmitPage from "./SubmitPage";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import AgingQuestions from "./AgingQuestions";
import AppearanceQuestions from "./AppearanceQuestions";
import ArchitectureQuestions from "./ArchitectureQuestions";
import ArtQuestions from "./ArtQuestions";
import BiologyQuestions from "./BiologyQuestions";
import CalendarQuestions from "./CalendarQuestions";
import GenderQuestions from "./GenderQuestions";
import HistoryQuestions from "./HistoryQuestions";
import LanguageQuestions from "./LanguageQuestions";
import LiteratureQuestions from "./LiteratureQuestions";
import LocationQuestions from "./LocationQuestions";
import MannersQuestions from "./MannersQuestions";
import MentalEmotionalQuestions from "./MentalEmotionalQuestions";
import PhysicalFeaturesQuestions from "./PhysicalFeaturesQuestions";

const BaseRaceModal = () => {
  const [questionnaireData, setQuestionnaireData] = useState({
    bookId: null,
    worldId: null,
    aging: {},
    appearance: {},
    architecture: {},
    art: {},
    biology: {},
    calendar: {},
    gender: {},
    history: {},
    language: {},
    literature: {},
    location: {},
    manners: {},
    mental: {},
    physicalFeatures: {},
  });

  const [modalPage, setModalPage] = useState(1);

  const incrementPage = (num) => {
    if (num + 1 > 16) return;
    setModalPage(num + 1);
  };

  const decrementPage = (num) => {
    if (num - 1 < 1) return;
    setModalPage(num - 1);
  };

  return (
    <div>
      <div>
        <h2>Create a New Race Questionnaire</h2>
      </div>
      <div>
        {modalPage === 1 && (
          <BookSelect
            setBook={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                bookId: data.id,
                worldId: data.bookWorld.id,
              }));
            }}
          />
        )}
        {modalPage === 2 && (
          <AgingQuestions
            setAging={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                aging: data,
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
          <ArchitectureQuestions
            setArchi={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, architecture: data }));
            }}
          />
        )}
        {modalPage === 5 && (
          <ArtQuestions
            setArt={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, art: data }));
            }}
          />
        )}
        {modalPage === 6 && (
          <BiologyQuestions
            setBio={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, biology: data }));
            }}
          />
        )}
        {modalPage === 7 && (
          <CalendarQuestions
            setCal={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, calendar: data }));
            }}
          />
        )}
        {modalPage === 8 && (
          <GenderQuestions
            setGender={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, gender: data }));
            }}
          />
        )}
        {modalPage === 9 && (
          <HistoryQuestions
            setHistory={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, history: data }));
            }}
          />
        )}
        {modalPage === 10 && (
          <LanguageQuestions
            setLang={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, language: data }));
            }}
          />
        )}
        {modalPage === 11 && (
          <LiteratureQuestions
            setLit={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, literature: data }));
            }}
          />
        )}
        {modalPage === 12 && (
          <LocationQuestions
            setLocation={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, location: data }));
            }}
          />
        )}
        {modalPage === 13 && (
          <MannersQuestions
            setManners={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, manners: data }));
            }}
          />
        )}
        {modalPage === 14 && (
          <MentalEmotionalQuestions
            setMental={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, mental: data }));
            }}
          />
        )}
        {modalPage === 15 && (
          <PhysicalFeaturesQuestions
            setPhysicals={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                physicalFeatures: data,
              }));
            }}
          />
        )}
        {modalPage === 16 && (
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

export default BaseRaceModal;
