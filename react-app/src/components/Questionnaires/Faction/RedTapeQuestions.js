import { useState } from "react";
import FactionQuestionnaire from "../../../utils/Questionnaires/Faction/Combined";

const RedTapeQuestions = ({ setRT }) => {
  const [inputs, setInputs] = useState({
    one: "",
    two: "",
    three: "",
  });

  const handleInputChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <div>
        <h3>Red Tape & Limitations</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">{FactionQuestionnaire["Red Tape"][0]}</label>
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
            <label htmlFor="two">{FactionQuestionnaire["Red Tape"][1]}</label>
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
            <label htmlFor="three">{FactionQuestionnaire["Red Tape"][2]}</label>
          </div>
          <div>
            <textarea
              name="three"
              value={inputs.three}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
      </div>
      <div>
        <button onClick={() => setRT(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default RedTapeQuestions;
