import { useState } from "react";
import ChapterQuestionnaire from "../../../utils/Questionnaires/Chapter/Combined";

const ThemeQuestions = ({ setTheme }) => {
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
        <h3>Tone & Theme</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">
              {ChapterQuestionnaire["Tone & Theme"][0]}
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
              {ChapterQuestionnaire["Tone & Theme"][1]}
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
              {ChapterQuestionnaire["Tone & Theme"][2]}
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
              {ChapterQuestionnaire["Tone & Theme"][3]}
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
      </div>
      <div>
        <button onClick={() => setTheme(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default ThemeQuestions;
