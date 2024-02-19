import { useState } from "react";
import FactionQuestionnaire from "../../../utils/Questionnaires/Faction/Combined";

const TurfQuestions = ({ setTurf }) => {
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
        <h3>Turf / Territory</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">{FactionQuestionnaire.Turf[0]}</label>
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
            <label htmlFor="two">{FactionQuestionnaire.Turf[1]}</label>
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
            <label htmlFor="three">{FactionQuestionnaire.Turf[2]}</label>
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
            <label htmlFor="four">{FactionQuestionnaire.Turf[3]}</label>
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
        <button onClick={() => setTurf(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default TurfQuestions;
