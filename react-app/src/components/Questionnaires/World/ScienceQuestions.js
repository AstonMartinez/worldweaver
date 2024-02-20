import { useState } from "react";
import WorldQuestionnaire from "../../../utils/Questionnaires/World/Combined";

const ScienceQuestions = ({ setSci }) => {
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
        <h3>Science & Technology</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">
              {WorldQuestionnaire["Science & Technology"][0]}
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
              {WorldQuestionnaire["Science & Technology"][1]}
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
              {WorldQuestionnaire["Science & Technology"][2]}
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
    </>
  );
};

export default ScienceQuestions;
