import { useState } from "react";
import LocationQuestionnaire from "../../../utils/Questionnaires/Location/Combined";

const ClimateQuestions = ({ setClimate }) => {
  const [inputs, setInputs] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
  });

  const handleInputChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <div>
        <h3>Climate & Weather</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">
              {LocationQuestionnaire["Climate & Weather"][0]}
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
              {LocationQuestionnaire["Climate & Weather"][1]}
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
              {LocationQuestionnaire["Climate & Weather"][2]}
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
              {LocationQuestionnaire["Climate & Weather"][3]}
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
              {LocationQuestionnaire["Climate & Weather"][4]}
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
      </div>
      <div>
        <button onClick={() => setClimate(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default ClimateQuestions;
