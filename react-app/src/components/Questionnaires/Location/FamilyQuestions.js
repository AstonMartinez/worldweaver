import { useState } from "react";
import LocationQuestionnaire from "../../../utils/Questionnaires/Location/Combined";

const FamilyQuestions = ({ setFam }) => {
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
    twelve: "",
    thirteen: "",
    fourteen: "",
    fifteen: "",
    sixteen: "",
    seventeen: "",
    eighteen: "",
    nineteen: "",
  });

  const handleInputChange = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <div>
        <h3>Marriages & Family Dynamics</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">
              {LocationQuestionnaire["Marriages & Families"][0]}
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
              {LocationQuestionnaire["Marriages & Families"][1]}
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
              {LocationQuestionnaire["Marriages & Families"][2]}
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
              {LocationQuestionnaire["Marriages & Families"][3]}
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
              {LocationQuestionnaire["Marriages & Families"][4]}
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
              {LocationQuestionnaire["Marriages & Families"][5]}
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
              {LocationQuestionnaire["Marriages & Families"][6]}
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
              {LocationQuestionnaire["Marriages & Families"][7]}
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
              {LocationQuestionnaire["Marriages & Families"][8]}
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
              {LocationQuestionnaire["Marriages & Families"][9]}
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
              {LocationQuestionnaire["Marriages & Families"][10]}
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
        <section>
          <div>
            <label htmlFor="twelve">
              {LocationQuestionnaire["Marriages & Families"][11]}
            </label>
          </div>
          <div>
            <textarea
              name="twelve"
              value={inputs.twelve}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="thirteen">
              {LocationQuestionnaire["Marriages & Families"][12]}
            </label>
          </div>
          <div>
            <textarea
              name="thirteen"
              value={inputs.thirteen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="fourteen">
              {LocationQuestionnaire["Marriages & Families"][13]}
            </label>
          </div>
          <div>
            <textarea
              name="fourteen"
              value={inputs.fourteen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="fifteen">
              {LocationQuestionnaire["Marriages & Families"][14]}
            </label>
          </div>
          <div>
            <textarea
              name="fifteen"
              value={inputs.fifteen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="sixteen">
              {LocationQuestionnaire["Marriages & Families"][15]}
            </label>
          </div>
          <div>
            <textarea
              name="sixteen"
              value={inputs.sixteen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="seventeen">
              {LocationQuestionnaire["Marriages & Families"][16]}
            </label>
          </div>
          <div>
            <textarea
              name="seventeen"
              value={inputs.seventeen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="eighteen">
              {LocationQuestionnaire["Marriages & Families"][17]}
            </label>
          </div>
          <div>
            <textarea
              name="eighteen"
              value={inputs.eighteen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="nineteen">
              {LocationQuestionnaire["Marriages & Families"][18]}
            </label>
          </div>
          <div>
            <textarea
              name="nineteen"
              value={inputs.nineteen}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
      </div>
      <div>
        <button onClick={() => setFam(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default FamilyQuestions;
