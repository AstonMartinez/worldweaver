import { useState } from "react";
import BookSelect from "./BookSelect";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ChapterSelect from "./ChapterSelect";

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
    if (num + 1 > 18) return;
    setModalPage(num + 1);
  };

  const decrementPage = (num) => {
    if (num - 1 < 1) return;
    setModalPage(num - 1);
  };

  console.log(questionnaireData.bookId);
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
