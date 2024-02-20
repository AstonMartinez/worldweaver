import { useState } from "react";
import RaceQuestionnaire from "../../../utils/Questionnaires/Race/Combined";

const HistoryQuestions = ({ setHistory }) => {
  const [inputs, setInputs] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });

  const handleInputChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <div>
        <h3>History</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">{RaceQuestionnaire.History[0]}</label>
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
            <label htmlFor="two">{RaceQuestionnaire.History[1]}</label>
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
            <label htmlFor="three">{RaceQuestionnaire.History[2]}</label>
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
            <label htmlFor="four">{RaceQuestionnaire.History[3]}</label>
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
            <label htmlFor="five">{RaceQuestionnaire.History[4]}</label>
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
            <label htmlFor="six">{RaceQuestionnaire.History[5]}</label>
          </div>
          <div>
            <textarea
              name="six"
              value={inputs.six}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
      </div>
      <div>
        <button onClick={() => setHistory(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default HistoryQuestions;
