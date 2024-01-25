import { GoPencil } from "react-icons/go";
import OpenModalButton from "../../OpenModalButton";

const CharactersList = ({ characterData }) => {
  return (
    <>
      <div>
        <div>
          <h3>Characters</h3>
        </div>
        <div>
          {characterData &&
            characterData.map((char, idx) => (
              <div key={idx} style={{ border: "1px solid black" }}>
                <div>
                  <OpenModalButton
                    buttonText={<GoPencil height={18} width={18} />}
                  />
                </div>
                <div>
                  <h4>{char?.name}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CharactersList;
