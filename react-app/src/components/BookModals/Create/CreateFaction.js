import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { createCharacter } from "../../../store/characters";
import { fetchOneBook } from "../../../store/books";
import { createFaction } from "../../../store/factions";

const CreateFaction = ({ bookId, locationData }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [fields, setFields] = useState({
    name: "",
    details: "",
    allegiance: "",
    location_id: 1,
  });

  const handleInputChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    return;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      toast.loading("Creating...", {
        position: "top-center",
        theme: "dark",
        toastId: "loadingToast",
      });

      const factionDetails = {
        book_id: bookId,
        name: fields.name,
        details: fields.details,
        allegiance: fields.allegiance,
        location_id: fields.location_id,
      };

      await dispatch(createFaction(factionDetails));
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        theme: "dark",
      });
    } finally {
      toast.dismiss("loadingToast");
      toast.success("Successfully created!", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      dispatch(fetchOneBook(bookId));
      closeModal();
    }
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
          <h3>Create a Faction</h3>
        </section>
        <section>
          <div>
            <label htmlFor="name">Name:</label>
          </div>
          <div>
            <input
              type="text"
              id="create-faction-name"
              name="name"
              value={fields.name}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="details">Details:</label>
          </div>
          <div>
            <textarea
              id="create-faction-details"
              name="details"
              value={fields.details}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="allegiance">Allegiance:</label>
          </div>
          <div>
            <input
              type="text"
              id="create-faction-allegiance"
              name="allegiance"
              value={fields.allegiance}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="location_id">Location:</label>
          </div>
          <div>
            <select name="location_id" onChange={(e) => handleInputChange(e)}>
              {locationData?.map((fac, idx) => (
                <option key={idx} value={fac?.id}>
                  {fac?.name}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section>
          <button type="submit">Create Faction</button>
        </section>
      </form>
    </div>
  );
};

export default CreateFaction;
