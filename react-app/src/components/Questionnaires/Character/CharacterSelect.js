import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharsByBook } from "../../../store/characters";

const CharacterSelect = ({ bookId, setChar }) => {
  const dispatch = useDispatch();
  const bookCharacters = useSelector((state) => state.characters.allCharacters);
  const [selectedChar, setSelectedChar] = useState(null);

  useEffect(() => {
    dispatch(fetchCharsByBook(bookId));
  }, [dispatch]);

  return (
    <>
      <div>
        <p>Which character would you like to create a questionnaire for?</p>
      </div>
      <div>
        {bookCharacters?.map((char) => (
          <div onClick={() => setSelectedChar(char)}>{char.name}</div>
        ))}
      </div>
      <div>
        <button onClick={() => setChar(selectedChar)}>Save & Continue</button>
      </div>
    </>
  );
};

export default CharacterSelect;
