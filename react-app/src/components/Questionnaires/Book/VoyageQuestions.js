import { useState } from "react";
import BookQuestionnaire from "../../../utils/Questionnaires/Book/Combined";

const VoyageQuestions = ({ setVoyage }) => {
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
  });

  const handleInputChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div>
        <h3>Voyage & Return</h3>
        <p>You can ignore this if your book isn't about a voyage!</p>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">
              {BookQuestionnaire["Voyage & Return"][0]}
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
              {BookQuestionnaire["Voyage & Return"][1]}
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
              {BookQuestionnaire["Voyage & Return"][2]}
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
              {BookQuestionnaire["Voyage & Return"][3]}
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
              {BookQuestionnaire["Voyage & Return"][4]}
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
              {BookQuestionnaire["Voyage & Return"][5]}
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
              {BookQuestionnaire["Voyage & Return"][6]}
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
              {BookQuestionnaire["Voyage & Return"][7]}
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
              {BookQuestionnaire["Voyage & Return"][8]}
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
              {BookQuestionnaire["Voyage & Return"][9]}
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
      </div>
      <div>
        <button onClick={() => setVoyage(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default VoyageQuestions;
