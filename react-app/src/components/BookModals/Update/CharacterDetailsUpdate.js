import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { updateCharacter } from "../../../store/characters";
import { fetchOneBook } from "../../../store/books";

const CharacterDetailsUpdate = ({
  charData,
  factionsData,
  bookId,
  raceData,
}) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const characterState = useSelector((state) => state.characters);
  const [errors, setErrors] = useState(characterState.errors);

  const [fields, setFields] = useState({
    name: charData.name ? charData.name : "",
    age: charData.age ? charData.age : 1,
    birthday: charData.birthday ? charData.birthday : "",
    faction_id: charData.faction_id ? charData.faction_id : "",
    description: charData.description ? charData.description : "",
    personality: charData.personality ? charData.personality : "",
    traits: charData.traits ? charData.traits : "",
    quips: charData.quips ? charData.quips : "",
    notes: charData.notes ? charData.notes : "",
    race: charData.race ? charData.race : "",
  });

  useEffect(() => {
    setErrors(characterState.errors);
  }, [dispatch, errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      toast.loading("Submitting changes...", {
        position: "top-center",
        theme: "dark",
        toastId: "loadingToast",
      });

      const updatedDetails = {
        name: fields.name,
        age: fields.age,
        birthday: fields.birthday,
        faction_id: fields.faction_id,
        description: fields.description,
        personality: fields.personality,
        traits: fields.traits,
        quips: fields.quips,
        notes: fields.notes,
        race: fields.race,
      };

      await dispatch(updateCharacter(charData.id, updatedDetails));
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        theme: "dark",
      });
    } finally {
      toast.dismiss("loadingToast");
      if (errors.length === 0) {
        toast.success("Successfully updated!", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        dispatch(fetchOneBook(bookId));
        closeModal();
      } else {
        for (let i = 0; i < errors.length; i++) {
          toast.error(errors[i], {
            position: "top-center",
            theme: "dark",
          });
        }
        return;
      }
    }
  };

  const handleInputChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    return;
  };

  return (
    <div>
      <section>
        <button onClick={closeModal}>
          <IoClose height={18} weight={18} />
        </button>
      </section>
      <form onSubmit={(e) => handleSubmit(e)}>
        <section>
          <div>
            <label htmlFor="name">Name:</label>
          </div>
          <div>
            <input
              type="text"
              id="update-character-name"
              name="name"
              value={fields.name}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="age">Age:</label>
          </div>
          <div>
            <input
              type="number"
              id="update-character-age"
              name="age"
              value={fields.age}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="birthday">Birthday:</label>
          </div>
          <div>
            <input
              type="text"
              id="update-character-birthday"
              name="birthday"
              value={fields.birthday}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="description">Description:</label>
          </div>
          <div>
            <textarea
              id="update-character-desc"
              name="description"
              value={fields.description}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="personality">Personality:</label>
          </div>
          <div>
            <textarea
              id="update-character-personality"
              name="personality"
              value={fields.personality}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="traits">Traits:</label>
          </div>
          <div>
            <textarea
              id="update-character-traits"
              name="traits"
              value={fields.traits}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="quips">Quips:</label>
          </div>
          <div>
            <textarea
              id="update-character-quips"
              name="quips"
              value={fields.quips}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="notes">Notes:</label>
          </div>
          <div>
            <textarea
              id="update-character-notes"
              name="notes"
              value={fields.notes}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="faction_id">Faction:</label>
          </div>
          <div>
            <select name="faction_id" onChange={(e) => handleInputChange(e)}>
              {factionsData.map((fac, idx) => (
                <option key={idx} value={fac.id}>
                  {fac.name}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="race">Race:</label>
          </div>
          <div>
            <select name="race" onChange={(e) => handleInputChange(e)}>
              <optgroup label="Your Races">
                {raceData?.map((race, idx) => (
                  <option key={idx} value={race.name}>
                    {race.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Default Races">
                <option value="Angel">Angel</option>
                <option value="Cryptid">Cryptid</option>
                <option value="Demigod">Demigod</option>
                <option value="Demon">Demon</option>
                <option value="Dwarven">Dwarven</option>
                <option value="Elven">Elven</option>
                <option value="Extraterrestrial">Extraterrestrial</option>
                <option value="Goblin">Goblin</option>
                <option value="God">God</option>
                <option value="Human">Human</option>
                <option value="Nephilim">Nephilim</option>
                <option value="Ogre">Ogre</option>
                <option value="Orc">Orc</option>
                <option value="Undead">Undead</option>
                <option value="Vampire">Vampire</option>
                <option value="Werewolf">Werewolf</option>
              </optgroup>
            </select>
          </div>
        </section>
        <section>
          <button type="submit">Submit Changes</button>
        </section>
      </form>
    </div>
  );
};

export default CharacterDetailsUpdate;
