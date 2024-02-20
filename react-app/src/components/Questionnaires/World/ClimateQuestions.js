import { useState } from "react";
import WorldQuestionnaire from "../../../utils/Questionnaires/World/Combined";

const ClimateQuestions = ({ setClimate }) => {
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
        <h3>Climate</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">{WorldQuestionnaire.Climate[0]}</label>
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
            <label htmlFor="two">{WorldQuestionnaire.Climate[1]}</label>
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
        <button onClick={() => setClimate(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default ClimateQuestions;
