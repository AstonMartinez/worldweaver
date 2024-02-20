import { useState } from "react";
import RaceQuestionnaire from "../../../utils/Questionnaires/Race/Combined";

const PhysicalFeaturesQuestions = ({ setPhysicals }) => {
  const [inputs, setInputs] = useState({
    one: "",
    two: "",
  });

  const handleInputChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <div>
        <h3>Physical Features</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">
              {RaceQuestionnaire["Physical Features"][0]}
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
              {RaceQuestionnaire["Physical Features"][1]}
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
      </div>
      <div>
        <button onClick={() => setPhysicals(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default PhysicalFeaturesQuestions;
