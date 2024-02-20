import { useState } from "react";
import RaceQuestionnaire from "../../../utils/Questionnaires/Race/Combined";

const LocationQuestions = ({ setLocation }) => {
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
        <h3>Location</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">{RaceQuestionnaire.Location[0]}</label>
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
            <label htmlFor="two">{RaceQuestionnaire.Location[1]}</label>
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
            <label htmlFor="three">{RaceQuestionnaire.Location[2]}</label>
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
        <button onClick={() => setLocation(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default LocationQuestions;
