import { useState } from "react";
import CharacterQuestionnaire from "../../../utils/Questionnaires/Character/Combined";

const PastFutureQuestions = ({ setPastFuture }) => {
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
  });

  const handleInputChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <div>
        <h3>Past & Future</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">
              {CharacterQuestionnaire["Past & Future"][0]}
            </label>
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
            <label htmlFor="two">
              {CharacterQuestionnaire["Past & Future"][1]}
            </label>
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
              {CharacterQuestionnaire["Past & Future"][2]}
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
              {CharacterQuestionnaire["Past & Future"][3]}
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
              {CharacterQuestionnaire["Past & Future"][4]}
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
            <label htmlFor="six">
              {CharacterQuestionnaire["Past & Future"][5]}
            </label>
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
              {CharacterQuestionnaire["Past & Future"][6]}
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
              {CharacterQuestionnaire["Past & Future"][7]}
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
              {CharacterQuestionnaire["Past & Future"][8]}
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
            <label htmlFor="ten">
              {CharacterQuestionnaire["Past & Future"][9]}
            </label>
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
              {CharacterQuestionnaire["Past & Future"][10]}
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
              {CharacterQuestionnaire["Past & Future"][11]}
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
              {CharacterQuestionnaire["Past & Future"][12]}
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
              {CharacterQuestionnaire["Past & Future"][13]}
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
              {CharacterQuestionnaire["Past & Future"][14]}
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
              {CharacterQuestionnaire["Past & Future"][15]}
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
              {CharacterQuestionnaire["Past & Future"][16]}
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
              {CharacterQuestionnaire["Past & Future"][17]}
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
              {CharacterQuestionnaire["Past & Future"][18]}
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
      </div>
      <div>
        <button onClick={() => setPastFuture(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default PastFutureQuestions;
