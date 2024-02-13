import { useState } from "react";
import BookQuestionnaire from "../../../utils/Questionnaires/Book/Combined";

const PlotQuestions = ({ setPlot }) => {
  const [inputs, setInputs] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
    ten: "",
    eleven: "",
  });

  const handleInputChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div>
        <h3>Plot & Setting</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">
              {BookQuestionnaire["Plot & Setting"][0]}
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
              {BookQuestionnaire["Plot & Setting"][1]}
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
              {BookQuestionnaire["Plot & Setting"][2]}
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
              {BookQuestionnaire["Plot & Setting"][3]}
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
              {BookQuestionnaire["Plot & Setting"][4]}
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
        <section>
          <div>
            <label htmlFor="six">
              {BookQuestionnaire["Plot & Setting"][5]}
            </label>
          </div>
          <div>
            <textarea
              name="six"
              value={inputs.six}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="seven">
              {BookQuestionnaire["Plot & Setting"][6]}
            </label>
          </div>
          <div>
            <textarea
              name="seven"
              value={inputs.seven}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="eight">
              {BookQuestionnaire["Plot & Setting"][7]}
            </label>
          </div>
          <div>
            <textarea
              name="eight"
              value={inputs.eight}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="nine">
              {BookQuestionnaire["Plot & Setting"][8]}
            </label>
          </div>
          <div>
            <textarea
              name="nine"
              value={inputs.nine}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="ten">
              {BookQuestionnaire["Plot & Setting"][9]}
            </label>
          </div>
          <div>
            <textarea
              name="ten"
              value={inputs.ten}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="eleven">
              {BookQuestionnaire["Plot & Setting"][10]}
            </label>
          </div>
          <div>
            <textarea
              name="eleven"
              value={inputs.eleven}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
      </div>
      <div>
        <button onClick={() => setPlot(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default PlotQuestions;
