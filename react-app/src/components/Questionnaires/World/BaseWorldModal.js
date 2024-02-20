import { useState } from "react";
import BookSelect from "./BookSelect";
import NavDots from "./NavDots";
import SubmitPage from "./SubmitPage";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import AgricultureQuestions from "./AgricultureQuestions";
import AnimalsQuestions from "./AnimalsQuestions";
import ArchitectureQuestions from "./ArchitectureQuestions";
import ArtQuestions from "./ArtQuestions";
import AstronomyQuestions from "./AstronomyQuestions";
import ClimateQuestions from "./ClimateQuestions";
import ClothingQuestions from "./ClothingQuestions";
import ConflictQuestions from "./ConflictQuestions";
import ContinentsQuestions from "./ContinentsQuestions";
import CultureQuestions from "./CultureQuestions";
import EducationQuestions from "./EducationQuestions";
import EmploymentQuestions from "./EmploymentQuestions";
import EntertainmentQuestions from "./EntertainmentQuestions";
import FoodQuestions from "./FoodQuestions";
import LandscapeQuestions from "./LandscapeQuestions";
import LanguageQuestions from "./LanguageQuestions";
import NaturalResourceQuestions from "./NaturalResourceQuestions";
import PlantQuestions from "./PlantQuestions";
import PopulationQuestions from "./PopulationQuestions";
import ReligionQuestions from "./ReligionQuestions";
import ScienceQuestions from "./ScienceQuestions";
import SeasonsQuestions from "./SeasonsQuestions";
import SocialQuestions from "./SocialQuestions";
import SocioeconomicsQuestions from "./SocioeconomicsQuestions";
import TradeQuestions from "./TradeQuestions";
import WeatherQuestions from "./WeatherQuestions";

const BaseWorldModal = () => {
  const [questionnaireData, setQuestionnaireData] = useState({
    bookId: null,
    worldId: null,
    agriculture: {},
    animals: {},
    architecture: {},
    art: {},
    astronomy: {},
    climate: {},
    clothing: {},
    conflict: {},
    continents: {},
    culture: {},
    education: {},
    employment: {},
    entertainment: {},
    food: {},
    landscape: {},
    language: {},
    naturalResources: {},
    plants: {},
    population: {},
    religion: {},
    science: {},
    seasons: {},
    socialRules: {},
    socioeconomics: {},
    trade: {},
    weather: {},
  });

  const [modalPage, setModalPage] = useState(1);

  const incrementPage = (num) => {
    if (num + 1 > 28) return;
    setModalPage(num + 1);
  };

  const decrementPage = (num) => {
    if (num - 1 < 1) return;
    setModalPage(num - 1);
  };

  return (
    <div>
      <div>
        <h2>Create a New World Questionnaire</h2>
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
          <AgricultureQuestions
            setAg={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                agriculture: data,
              }));
            }}
          />
        )}
        {modalPage === 3 && (
          <AnimalsQuestions
            setAnimals={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                animals: data,
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
          <AstronomyQuestions
            setAstro={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, astronomy: data }));
            }}
          />
        )}
        {modalPage === 7 && (
          <ClimateQuestions
            setClimate={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, climate: data }));
            }}
          />
        )}
        {modalPage === 8 && (
          <ClothingQuestions
            setClothing={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, clothing: data }));
            }}
          />
        )}
        {modalPage === 9 && (
          <ConflictQuestions
            setConflict={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, conflict: data }));
            }}
          />
        )}
        {modalPage === 10 && (
          <ContinentsQuestions
            setConts={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, continents: data }));
            }}
          />
        )}
        {modalPage === 11 && (
          <CultureQuestions
            setCult={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, culture: data }));
            }}
          />
        )}
        {modalPage === 12 && (
          <EducationQuestions
            setEdu={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, education: data }));
            }}
          />
        )}
        {modalPage === 13 && (
          <EmploymentQuestions
            setEmploy={(data) => {
              setQuestionnaireData((prev) => ({ ...prev, employment: data }));
            }}
          />
        )}
        {modalPage === 14 && (
          <EntertainmentQuestions
            setEnt={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                entertainment: data,
              }));
            }}
          />
        )}
        {modalPage === 15 && (
          <FoodQuestions
            setFood={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                food: data,
              }));
            }}
          />
        )}
        {modalPage === 16 && (
          <LandscapeQuestions
            setLand={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                landscape: data,
              }));
            }}
          />
        )}
        {modalPage === 17 && (
          <LanguageQuestions
            setLang={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                language: data,
              }));
            }}
          />
        )}
        {modalPage === 18 && (
          <NaturalResourceQuestions
            setNR={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                naturalResources: data,
              }));
            }}
          />
        )}
        {modalPage === 19 && (
          <PlantQuestions
            setPlant={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                plants: data,
              }));
            }}
          />
        )}
        {modalPage === 20 && (
          <PopulationQuestions
            setPop={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                population: data,
              }));
            }}
          />
        )}
        {modalPage === 21 && (
          <ReligionQuestions
            setReligion={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                religion: data,
              }));
            }}
          />
        )}
        {modalPage === 22 && (
          <ScienceQuestions
            setSci={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                science: data,
              }));
            }}
          />
        )}
        {modalPage === 23 && (
          <SeasonsQuestions
            setSeasons={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                seasons: data,
              }));
            }}
          />
        )}
        {modalPage === 24 && (
          <SocialQuestions
            setFood={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                socialRules: data,
              }));
            }}
          />
        )}
        {modalPage === 25 && (
          <SocioeconomicsQuestions
            setSocio={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                socioeconomics: data,
              }));
            }}
          />
        )}
        {modalPage === 26 && (
          <TradeQuestions
            setTrade={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                trade: data,
              }));
            }}
          />
        )}
        {modalPage === 27 && (
          <WeatherQuestions
            setWeather={(data) => {
              setQuestionnaireData((prev) => ({
                ...prev,
                weather: data,
              }));
            }}
          />
        )}
        {modalPage === 28 && (
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

export default BaseWorldModal;
