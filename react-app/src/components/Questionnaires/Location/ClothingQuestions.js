import { useState } from "react";
import LocationQuestionnaire from "../../../utils/Questionnaires/Location/Combined";

const ClothingQuestions = ({ setClothing }) => {
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
        <h3>Clothing & Fashion</h3>
      </div>
      <div>
        <section>
          <div>
            <label htmlFor="one">
              {LocationQuestionnaire["Clothing & Fashion"][0]}
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
              {LocationQuestionnaire["Clothing & Fashion"][1]}
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
              {LocationQuestionnaire["Clothing & Fashion"][2]}
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
              {LocationQuestionnaire["Clothing & Fashion"][3]}
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
              {LocationQuestionnaire["Clothing & Fashion"][4]}
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
              {LocationQuestionnaire["Clothing & Fashion"][5]}
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
              {LocationQuestionnaire["Clothing & Fashion"][6]}
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
              {LocationQuestionnaire["Clothing & Fashion"][7]}
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
              {LocationQuestionnaire["Clothing & Fashion"][8]}
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
              {LocationQuestionnaire["Clothing & Fashion"][9]}
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
              {LocationQuestionnaire["Clothing & Fashion"][10]}
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
              {LocationQuestionnaire["Clothing & Fashion"][11]}
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
              {LocationQuestionnaire["Clothing & Fashion"][12]}
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
              {LocationQuestionnaire["Clothing & Fashion"][13]}
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
              {LocationQuestionnaire["Clothing & Fashion"][14]}
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
              {LocationQuestionnaire["Clothing & Fashion"][15]}
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
              {LocationQuestionnaire["Clothing & Fashion"][16]}
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
              {LocationQuestionnaire["Clothing & Fashion"][17]}
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
              {LocationQuestionnaire["Clothing & Fashion"][18]}
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
        <button onClick={() => setClothing(inputs)}>Save & Continue</button>
      </div>
    </>
  );
};

export default ClothingQuestions;
