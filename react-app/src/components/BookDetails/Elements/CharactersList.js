import { GoPencil } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import CharacterDelete from "../../BookModals/Delete/CharacterDelete";
import CharacterDetailsUpdate from "../../BookModals/Update/CharacterDetailsUpdate";
import OpenModalButton from "../../OpenModalButton";

const CharactersList = ({ characterData, factionsData, bookId, raceData }) => {
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
                        bookId={bookId}
                        raceData={raceData}
                      />
                    }
                  />
                  <OpenModalButton
                    buttonText={<IoTrashOutline height={18} width={18} />}
                    modalComponent={
                      <CharacterDelete charData={char} bookId={bookId} />
                    }
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
