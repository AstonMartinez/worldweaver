import { useState } from "react";
import CharacterQuestionnaire from "../../../utils/Questionnaires/Character/Combined";

const AppearanceQuestions = ({ setAppear }) => {
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
  });

  const handleInputChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div>
        <h3>Appearance</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">{CharacterQuestionnaire.Appearance[0]}</label>
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
            <label htmlFor="two">{CharacterQuestionnaire.Appearance[1]}</label>
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
              {CharacterQuestionnaire.Appearance[2]}
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
            <label htmlFor="four">{CharacterQuestionnaire.Appearance[3]}</label>
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
            <label htmlFor="five">{CharacterQuestionnaire.Appearance[4]}</label>
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
            <label htmlFor="six">{CharacterQuestionnaire.Appearance[5]}</label>
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
              {CharacterQuestionnaire.Appearance[6]}
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
              {CharacterQuestionnaire.Appearance[7]}
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
            <label htmlFor="nine">{CharacterQuestionnaire.Appearance[8]}</label>
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
            <label htmlFor="ten">{CharacterQuestionnaire.Appearance[9]}</label>
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
              {CharacterQuestionnaire.Appearance[10]}
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
              {CharacterQuestionnaire.Appearance[11]}
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
              {CharacterQuestionnaire.Appearance[12]}
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
              {CharacterQuestionnaire.Appearance[13]}
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
              {CharacterQuestionnaire.Appearance[14]}
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
              {CharacterQuestionnaire.Appearance[15]}
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
              {CharacterQuestionnaire.Appearance[16]}
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
              {CharacterQuestionnaire.Appearance[17]}
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
              {CharacterQuestionnaire.Appearance[18]}
            </label>
          </div>
          <div>
            <textarea
              name="nineteen"
              value={inputs.nineteen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="twenty">
              {CharacterQuestionnaire.Appearance[19]}
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
              {CharacterQuestionnaire.Appearance[20]}
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
              {CharacterQuestionnaire.Appearance[21]}
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
              {CharacterQuestionnaire.Appearance[22]}
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
              {CharacterQuestionnaire.Appearance[23]}
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
              {CharacterQuestionnaire.Appearance[24]}
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
      </div>
      <div>
        <button onClick={() => setAppear(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default AppearanceQuestions;
