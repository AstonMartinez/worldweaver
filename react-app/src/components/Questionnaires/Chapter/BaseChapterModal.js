import { useState } from "react";
import BookSelect from "./BookSelect";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ChapterSelect from "./ChapterSelect";
import NavDots from "./NavDots";
import CharactersQuestions from "./CharactersQuestions";
import EventsQuestions from "./EventsQuestions";
import PlotQuestions from "./PlotQuestions";
import PurposeQuestions from "./PurposeQuestions";
import SettingQuestions from "./SettingQuestions";
import ThemeQuestions from "./ThemeQuestions";
import SubmitPage from "./SubmitPage";

const BaseChapterModal = () => {
  const [questionnaireData, setQuestionnaireData] = useState({
    bookId: null,
    chapterId: null,
    characters: {},
    events: {},
    plot: {},
    purpose: {},
    setting: {},
    theme: {},
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
        <h2>Create a New Chapter Questionnaire</h2>
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
            setChap={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, chapterId: data.id }));
            }}
          />
        )}
        {modalPage === 3 && (
          <CharactersQuestions
            setChars={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, characters: data }));
            }}
          />
        )}
        {modalPage === 4 && (
          <EventsQuestions
            setEvents={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, events: data }));
            }}
          />
        )}
        {modalPage === 5 && (
          <PlotQuestions
            setPlot={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, plot: data }));
            }}
          />
        )}
        {modalPage === 6 && (
          <PurposeQuestions
            setPurpose={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, purpose: data }));
            }}
          />
        )}
        {modalPage === 7 && (
          <SettingQuestions
            setSetting={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, setting: data }));
            }}
          />
        )}
        {modalPage === 8 && (
          <ThemeQuestions
            setTheme={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, theme: data }));
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

export default BaseChapterModal;
