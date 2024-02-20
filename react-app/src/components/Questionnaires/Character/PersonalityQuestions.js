import { useState } from "react";
import CharacterQuestionnaire from "../../../utils/Questionnaires/Character/Combined";

const PersonalityQuestions = ({ setPersonality }) => {
  const [inputs, setInputs] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
    twenty: "",
    twentyOne: "",
    twentyTwo: "",
    twentyThree: "",
    twentyFour: "",
    twentyFive: "",
    twentySix: "",
    twentySeven: "",
    twentyEight: "",
    twentyNine: "",
    thirty: "",
    thirtyOne: "",
    thirtyTwo: "",
    thirtyThree: "",
    thirtyFour: "",
    thirtyFive: "",
    thirtySix: "",
    thirtySeven: "",
  });

  const handleInputChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <div>
        <h3>Personality</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">{CharacterQuestionnaire.Personality[0]}</label>
          </div>
          <div>
            <textarea
              name="one"
              value={inputs.one}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="two">{CharacterQuestionnaire.Personality[1]}</label>
          </div>
          <div>
            <textarea
              name="two"
              value={inputs.two}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="three">
              {CharacterQuestionnaire.Personality[2]}
            </label>
          </div>
          <div>
            <textarea
              name="three"
              value={inputs.three}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="four">
              {CharacterQuestionnaire.Personality[3]}
            </label>
          </div>
          <div>
            <textarea
              name="four"
              value={inputs.four}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="five">
              {CharacterQuestionnaire.Personality[4]}
            </label>
          </div>
          <div>
            <textarea
              name="five"
              value={inputs.five}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="six">{CharacterQuestionnaire.Personality[5]}</label>
          </div>
          <div>
            <textarea
              name="six"
              value={inputs.six}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="seven">
              {CharacterQuestionnaire.Personality[6]}
            </label>
          </div>
          <div>
            <textarea
              name="seven"
              value={inputs.seven}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="eight">
              {CharacterQuestionnaire.Personality[7]}
            </label>
          </div>
          <div>
            <textarea
              name="eight"
              value={inputs.eight}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="nine">
              {CharacterQuestionnaire.Personality[8]}
            </label>
          </div>
          <div>
            <textarea
              name="nine"
              value={inputs.nine}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="ten">{CharacterQuestionnaire.Personality[9]}</label>
          </div>
          <div>
            <textarea
              name="ten"
              value={inputs.ten}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="eleven">
              {CharacterQuestionnaire.Personality[10]}
            </label>
          </div>
          <div>
            <textarea
              name="eleven"
              value={inputs.eleven}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="twelve">
              {CharacterQuestionnaire.Personality[11]}
            </label>
          </div>
          <div>
            <textarea
              name="twelve"
              value={inputs.twelve}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="thirteen">
              {CharacterQuestionnaire.Personality[12]}
            </label>
          </div>
          <div>
            <textarea
              name="thirteen"
              value={inputs.thirteen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="fourteen">
              {CharacterQuestionnaire.Personality[13]}
            </label>
          </div>
          <div>
            <textarea
              name="fourteen"
              value={inputs.fourteen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="fifteen">
              {CharacterQuestionnaire.Personality[14]}
            </label>
          </div>
          <div>
            <textarea
              name="fifteen"
              value={inputs.fifteen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="sixteen">
              {CharacterQuestionnaire.Personality[15]}
            </label>
          </div>
          <div>
            <textarea
              name="sixteen"
              value={inputs.sixteen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="seventeen">
              {CharacterQuestionnaire.Personality[16]}
            </label>
          </div>
          <div>
            <textarea
              name="seventeen"
              value={inputs.seventeen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="eighteen">
              {CharacterQuestionnaire.Personality[17]}
            </label>
          </div>
          <div>
            <textarea
              name="eighteen"
              value={inputs.eighteen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="nineteen">
              {CharacterQuestionnaire.Personality[18]}
            </label>
          </div>
          <div>
            <textarea
              name="nineteen"
              value={inputs.nineteen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div>
            <label htmlFor="twenty">
              {CharacterQuestionnaire.Personality[19]}
            </label>
          </div>
          <div>
            <textarea
              name="twenty"
              value={inputs.twenty}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="twentyOne">
              {CharacterQuestionnaire.Personality[20]}
            </label>
          </div>
          <div>
            <textarea
              name="twentyOne"
              value={inputs.twentyOne}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="twentyTwo">
              {CharacterQuestionnaire.Personality[21]}
            </label>
          </div>
          <div>
            <textarea
              name="twentyTwo"
              value={inputs.twentyTwo}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="twentyThree">
              {CharacterQuestionnaire.Personality[22]}
            </label>
          </div>
          <div>
            <textarea
              name="twentyThree"
              value={inputs.twentyThree}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="twentyFour">
              {CharacterQuestionnaire.Personality[23]}
            </label>
          </div>
          <div>
            <textarea
              name="twentyFour"
              value={inputs.twentyFour}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="twentyFive">
              {CharacterQuestionnaire.Personality[24]}
            </label>
          </div>
          <div>
            <textarea
              name="twentyFive"
              value={inputs.twentyFive}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="twentySix">
              {CharacterQuestionnaire.Personality[25]}
            </label>
          </div>
          <div>
            <textarea
              name="twentySix"
              value={inputs.twentySix}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="twentySeven">
              {CharacterQuestionnaire.Personality[26]}
            </label>
          </div>
          <div>
            <textarea
              name="twentySeven"
              value={inputs.twentySeven}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="twentyEight">
              {CharacterQuestionnaire.Personality[27]}
            </label>
          </div>
          <div>
            <textarea
              name="twentyEight"
              value={inputs.twentyEight}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="twentyNine">
              {CharacterQuestionnaire.Personality[28]}
            </label>
          </div>
          <div>
            <textarea
              name="twentyNine"
              value={inputs.twentyNine}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="thirty">
              {CharacterQuestionnaire.Personality[29]}
            </label>
          </div>
          <div>
            <textarea
              name="thirty"
              value={inputs.thirty}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="thirtyOne">
              {CharacterQuestionnaire.Personality[30]}
            </label>
          </div>
          <div>
            <textarea
              name="thirtyOne"
              value={inputs.thirtyOne}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="thirtyTwo">
              {CharacterQuestionnaire.Personality[31]}
            </label>
          </div>
          <div>
            <textarea
              name="thirtyTwo"
              value={inputs.thirtyTwo}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="thirtyThree">
              {CharacterQuestionnaire.Personality[32]}
            </label>
          </div>
          <div>
            <textarea
              name="thirtyThree"
              value={inputs.thirtyThree}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="thirtyFour">
              {CharacterQuestionnaire.Personality[33]}
            </label>
          </div>
          <div>
            <textarea
              name="thirtyFour"
              value={inputs.thirtyFour}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="thirtyFive">
              {CharacterQuestionnaire.Personality[34]}
            </label>
          </div>
          <div>
            <textarea
              name="thirtyFive"
              value={inputs.thirtyFive}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="thirtySix">
              {CharacterQuestionnaire.Personality[35]}
            </label>
          </div>
          <div>
            <textarea
              name="thirtySix"
              value={inputs.thirtySix}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="thirtySeven">
              {CharacterQuestionnaire.Personality[36]}
            </label>
          </div>
          <div>
            <textarea
              name="thirtySeven"
              value={inputs.thirtySeven}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
      </div>
      <div>
        <button onClick={() => setPersonality(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default PersonalityQuestions;
