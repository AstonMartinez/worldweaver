import { useState } from "react";
import WorldQuestionnaire from "../../../utils/Questionnaires/World/Combined";

const PlantQuestions = ({ setPlant }) => {
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
        <h3>Plants</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">{WorldQuestionnaire.Plants[0]}</label>
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
            <label htmlFor="two">{WorldQuestionnaire.Plants[1]}</label>
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
        <button onClick={() => setPlant(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default PlantQuestions;
