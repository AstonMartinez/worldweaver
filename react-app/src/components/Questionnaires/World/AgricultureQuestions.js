import { useState } from "react";
import WorldQuestionnaire from "../../../utils/Questionnaires/World/Combined";

const AgricultureQuestions = ({ setAg }) => {
  const [inputs, setInputs] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });

  const handleInputChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div>
        <h3>Agriculture</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">{WorldQuestionnaire.Agriculture[0]}</label>
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
            <label htmlFor="two">{WorldQuestionnaire.Agriculture[1]}</label>
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
            <label htmlFor="three">{WorldQuestionnaire.Agriculture[2]}</label>
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
            <label htmlFor="four">{WorldQuestionnaire.Agriculture[3]}</label>
          </div>
          <div>
            <textarea
              name="four"
              value={inputs.four}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
      </div>
      <div>
        <button onClick={() => setAg(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default AgricultureQuestions;
