import { GoPencil } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import CharacterDetailsUpdate from "../../BookModals/Update/CharacterDetailsUpdate";
import OpenModalButton from "../../OpenModalButton";

const CharactersList = ({ characterData, factionsData }) => {
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
                    modalComponent={
                      <CharacterDetailsUpdate
                        charData={char}
                        factionsData={factionsData}
                      />
                    }
                  />
                  <OpenModalButton
                    buttonText={<IoTrashOutline height={18} width={18} />}
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
