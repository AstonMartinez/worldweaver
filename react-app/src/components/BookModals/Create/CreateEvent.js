import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { fetchOneBook } from "../../../store/books";
import { createEvent } from "../../../store/events";

const CreateEvent = ({ bookId, locationData, world }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [fields, setFields] = useState({
    name: "",
    timeframe: "",
    details: "",
    impact: "",
    location_id: "",
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

      const eventDetails = {
        book_id: bookId,
        world_id: world.id,
        location_id: fields.location_id,
        name: fields.name,
        timeframe: fields.timeframe,
        details: fields.details,
        impact: fields.impact,
      };

      await dispatch(createEvent(eventDetails));
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
          <h3>Create an Event</h3>
        </section>
        <section>
          <div>
            <label htmlFor="name">Name:</label>
          </div>
          <div>
            <input
              type="text"
              id="create-event-name"
              name="name"
              value={fields.name}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="timeframe">Timeframe:</label>
          </div>
          <div>
            <input
              type="text"
              id="create-event-timeframe"
              name="timeframe"
              value={fields.timeframe}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="details">Details:</label>
          </div>
          <div>
            <input
              type="text"
              id="create-event-details"
              name="details"
              value={fields.details}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="impact">Impact:</label>
          </div>
          <div>
            <textarea
              id="create-event-impact"
              name="impact"
              value={fields.impact}
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
              {locationData?.map((loc, idx) => (
                <option key={idx} value={loc?.id}>
                  {loc?.name}
                </option>
              ))}
            </select>
          </div>
        </section>
        <section>
          <button type="submit">Create Event</button>
        </section>
      </form>
    </div>
  );
};

export default CreateEvent;
