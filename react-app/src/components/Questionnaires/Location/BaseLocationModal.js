import { useState } from "react";
import BookSelect from "./BookSelect";
import NavDots from "./NavDots";
import SubmitPage from "./SubmitPage";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import AnimalsQuestions from "./AnimalsQuestions";
import ClimateQuestions from "./ClimateQuestions";
import ClothingQuestions from "./ClothingQuestions";
import DailyLifeQuestions from "./DailyLifeQuestions";
import DeathQuestions from "./DeathQuestions";
import EconomyQuestions from "./EconomyQuestions";
import EducationQuestions from "./EducationQuestions";
import EnvironmentQuestions from "./EnvironmentQuestions";
import EthicsQuestions from "./EthicsQuestions";
import FamilyQuestions from "./FamilyQuestions";
import FoodDrinkQuestions from "./FoodDrinkQuestions";
import GenderQuestions from "./GenderQuestions";
import GovernmentQuestions from "./GovernmentQuestions";
import HolidaysQuestions from "./HolidaysQuestions";
import MilitaryQuestions from "./MilitaryQuestions";
import RecreationQuestions from "./RecreationQuestions";
import ReligionQuestions from "./ReligionQuestions";
import SocialQuestions from "./SocialQuestions";
import TabooQuestions from "./TabooQuestions";
import TechnologyQuestions from "./TechnologyQuestions";
import TransportationQuestions from "./TransportationQuestions";

const BaseLocationModal = () => {
  const [questionnaireData, setQuestionnaireData] = useState({
    bookId: null,
    worldId: null,
    animals: {},
    climate: {},
    clothing: {},
    dailyLife: {},
    death: {},
    economy: {},
    education: {},
    environment: {},
    ethics: {},
    foodDrink: {},
    gender: {},
    government: {},
    holidays: {},
    marriagesFamilies: {},
    military: {},
    recreation: {},
    religion: {},
    social: {},
    taboos: {},
    technology: {},
    transportation: {},
  });

  const [modalPage, setModalPage] = useState(1);

  const incrementPage = (num) => {
    if (num + 1 > 23) return;
    setModalPage(num + 1);
  };

  const decrementPage = (num) => {
    if (num - 1 < 1) return;
    setModalPage(num - 1);
  };

  return (
    <div>
      <div>
        <h2>Create a New Location Questionnaire</h2>
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
          <AnimalsQuestions
            setAnimals={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                animals: data,
              }));
            }}
          />
        )}
        {modalPage === 3 && (
          <ClimateQuestions
            setClimate={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                climate: data,
              }));
            }}
          />
        )}
        {modalPage === 4 && (
          <ClothingQuestions
            setClothing={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, clothing: data }));
            }}
          />
        )}
        {modalPage === 5 && (
          <DailyLifeQuestions
            setDailyLife={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, dailyLife: data }));
            }}
          />
        )}
        {modalPage === 6 && (
          <DeathQuestions
            setDeath={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, death: data }));
            }}
          />
        )}
        {modalPage === 7 && (
          <EconomyQuestions
            setEconomy={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, economy: data }));
            }}
          />
        )}
        {modalPage === 8 && (
          <EducationQuestions
            setEducation={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, education: data }));
            }}
          />
        )}
        {modalPage === 9 && (
          <EnvironmentQuestions
            setEnviron={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, environment: data }));
            }}
          />
        )}
        {modalPage === 10 && (
          <EthicsQuestions
            setEthics={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, ethics: data }));
            }}
          />
        )}
        {modalPage === 11 && (
          <FoodDrinkQuestions
            setFD={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, foodDrink: data }));
            }}
          />
        )}
        {modalPage === 12 && (
          <GenderQuestions
            setGender={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, gender: data }));
            }}
          />
        )}
        {modalPage === 13 && (
          <GovernmentQuestions
            setGov={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, government: data }));
            }}
          />
        )}
        {modalPage === 14 && (
          <HolidaysQuestions
            setHolidays={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, holidays: data }));
            }}
          />
        )}
        {modalPage === 15 && (
          <FamilyQuestions
            setFam={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                marriagesFamilies: data,
              }));
            }}
          />
        )}
        {modalPage === 16 && (
          <MilitaryQuestions
            setMilitary={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, military: data }));
            }}
          />
        )}
        {modalPage === 17 && (
          <RecreationQuestions
            setRec={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, recreation: data }));
            }}
          />
        )}
        {modalPage === 18 && (
          <ReligionQuestions
            setReligion={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, religion: data }));
            }}
          />
        )}
        {modalPage === 19 && (
          <SocialQuestions
            setSocial={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, social: data }));
            }}
          />
        )}
        {modalPage === 20 && (
          <TabooQuestions
            setTaboo={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, taboos: data }));
            }}
          />
        )}
        {modalPage === 21 && (
          <TechnologyQuestions
            setTech={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, technology: data }));
            }}
          />
        )}
        {modalPage === 22 && (
          <TransportationQuestions
            setTransport={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                transportation: data,
              }));
            }}
          />
        )}
        {modalPage === 23 && (
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

export default BaseLocationModal;
