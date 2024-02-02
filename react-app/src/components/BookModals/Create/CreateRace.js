import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { fetchOneBook } from "../../../store/books";
import { createRace } from "../../../store/races";

const CreateRace = ({ bookId, world, locationData }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const raceState = useSelector((state) => state.races);
  const [errors, setErrors] = useState(raceState.errors);
  const [fields, setFields] = useState({
    name: "",
    classification: "",
    appearance: "",
    fashion: "",
    language: "",
    status: "",
    religion: "",
    location: "",
    culture: "",
    notes: "",
  });

  useEffect(() => {
    setErrors(raceState.errors);
  }, [dispatch, errors]);

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

      const raceDetails = {
        book_id: bookId,
        world_id: world.id,
        name: fields.name,
        classification: fields.classification,
        appearance: fields.appearance,
        fashion: fields.fashion,
        language: fields.language,
        status: fields.status,
        religion_and_deities: fields.religion,
        primary_location_id: fields.location,
        society_and_culture: fields.culture,
        notes: fields.notes,
      };

      await dispatch(createRace(raceDetails));
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        theme: "dark",
      });
    } finally {
      toast.dismiss("loadingToast");
      if (errors.length === 0) {
        toast.success("Successfully created!", {
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

  return (
    <div>
      <section>
        <button onClick={closeModal}>
          <IoClose height={18} weight={18} />
        </button>
      </section>
      <form onSubmit={(e) => handleSubmit(e)} className="modal-form">
        <section>
          <h3>Create a Race</h3>
        </section>
        <section>
          <div>
            <label htmlFor="name">Name:</label>
          </div>
          <div>
            <input
              type="text"
              id="create-race-name"
              name="name"
              value={fields.name}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="classification">Classification:</label>
          </div>
          <div>
            <textarea
              id="create-race-classification"
              name="classification"
              value={fields.classification}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="appearance">Appearance:</label>
          </div>
          <div>
            <textarea
              id="create-race-appearance"
              name="appearance"
              value={fields.appearance}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="fashion">Fashion Resources:</label>
          </div>
          <div>
            <textarea
              id="create-race-fashion"
              name="fashion"
              value={fields.fashion}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="language">Language:</label>
          </div>
          <div>
            <textarea
              id="create-race-language"
              name="language"
              value={fields.language}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="status">Status:</label>
          </div>
          <div>
            <textarea
              id="create-race-status"
              name="status"
              value={fields.status}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="religion">Religion & Deities:</label>
          </div>
          <div>
            <textarea
              id="create-race-religion"
              name="religion"
              value={fields.religion}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="location">Primary Location:</label>
          </div>
          <div>
            <select name="location" onChange={(e) => handleInputChange(e)}>
              {locationData.map((loc, idx) => (
                <option key={idx} value={loc.id}>
                  {loc.name}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="culture">Society & Culture:</label>
          </div>
          <div>
            <textarea
              id="create-race-culture"
              name="culture"
              value={fields.culture}
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
              id="create-race-notes"
              name="notes"
              value={fields.notes}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <button type="submit">Create</button>
        </section>
      </form>
    </div>
  );
};

export default CreateRace;
