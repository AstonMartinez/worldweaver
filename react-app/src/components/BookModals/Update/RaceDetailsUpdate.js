import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { fetchOneBook } from "../../../store/books";
import { updateRace } from "../../../store/races";

const RaceDetailsUpdate = ({ raceData, bookId, locationData }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const raceState = useSelector((state) => state.races);
  const [errors, setErrors] = useState(raceState.errors);

  const [fields, setFields] = useState({
    name: raceData.name ? raceData.name : "",
    classification: raceData.classification ? raceData.classification : "",
    appearance: raceData.appearance ? raceData.appearance : "",
    fashion: raceData.fashion ? raceData.fashion : "",
    language: raceData.language ? raceData.language : "",
    status: raceData.status ? raceData.status : "",
    religion: raceData.religion_and_deities
      ? raceData.religion_and_deities
      : "",
    location: raceData.primary_location_id ? raceData.primary_location_id : "",
    culture: raceData.society_and_culture ? raceData.society_and_culture : "",
    notes: raceData.notes ? raceData.notes : "",
  });

  useEffect(() => {
    setErrors(raceState.errors);
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
        classification: fields.classification,
        appearance: fields.appearance,
        fashion: fields.fashion,
        seasons: fields.seasons,
        language: fields.language,
        status: fields.status,
        religion_and_deities: fields.religion,
        primary_location_id: fields.location,
        society_and_culture: fields.culture,
        notes: fields.notes,
      };

      await dispatch(updateRace(raceData.id, updatedDetails));
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
              id="update-race-name"
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
              id="update-race-classification"
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
              id="update-race-appearance"
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
              id="update-race-fashion"
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
              id="update-race-language"
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
              id="update-race-status"
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
              id="update-race-religion"
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
              id="update-race-culture"
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
              id="update-race-notes"
              name="notes"
              value={fields.notes}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <button type="submit">Submit Changes</button>
        </section>
      </form>
    </div>
  );
};

export default RaceDetailsUpdate;
