import { useState } from "react";
import WorldQuestionnaire from "../../../utils/Questionnaires/World/Combined";

const ContinentsQuestions = ({ setConts }) => {
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
        <h3>Continents & Countries</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">
              {WorldQuestionnaire["Continents & Countries"][0]}
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
              {WorldQuestionnaire["Continents & Countries"][1]}
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
              {WorldQuestionnaire["Continents & Countries"][2]}
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
      </div>
      <div>
        <button onClick={() => setConts(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default ContinentsQuestions;
