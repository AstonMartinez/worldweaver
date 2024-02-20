import { useState } from "react";
import BookSelect from "./BookSelect";
import NavDots from "./NavDots";
import SubmitPage from "./SubmitPage";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import BasicQuestions from "./BasicQuestions";
import CostsDangersQuestions from "./CostsDangersQuestions";
import CultureQuestions from "./CultureQuestions";
import LimitationsQuestions from "./LimitationsQuestions";
import OriginsQuestions from "./OriginsQuestions";
import UsersQuestions from "./UsersQuestions";

const BaseMagicModal = () => {
  const [questionnaireData, setQuestionnaireData] = useState({
    bookId: null,
    worldId: null,
    basics: {},
    costs: {},
    culture: {},
    limitations: {},
    origins: {},
    users: {},
  });

  const [modalPage, setModalPage] = useState(1);

  const incrementPage = (num) => {
    if (num + 1 > 8) return;
    setModalPage(num + 1);
  };

  const decrementPage = (num) => {
    if (num - 1 < 1) return;
    setModalPage(num - 1);
  };

  return (
    <div>
      <div>
        <h2>Create a New Magic Questionnaire</h2>
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
          <BasicQuestions
            setBasics={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                basics: data,
              }));
            }}
          />
        )}
        {modalPage === 3 && (
          <CostsDangersQuestions
            setCosts={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                costs: data,
              }));
            }}
          />
        )}
        {modalPage === 4 && (
          <CultureQuestions
            setCulture={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, culture: data }));
            }}
          />
        )}
        {modalPage === 5 && (
          <LimitationsQuestions
            setLimits={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, limitations: data }));
            }}
          />
        )}
        {modalPage === 6 && (
          <OriginsQuestions
            setOrigins={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, origins: data }));
            }}
          />
        )}
        {modalPage === 7 && (
          <UsersQuestions
            setUsers={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, users: data }));
            }}
          />
        )}
        {modalPage === 8 && (
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

export default BaseMagicModal;
