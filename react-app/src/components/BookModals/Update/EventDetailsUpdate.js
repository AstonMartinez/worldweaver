import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { updateEventDetails } from "../../../store/events";
import { fetchOneBook } from "../../../store/books";

const EventDetailsUpdate = ({ eventData, bookId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const eventState = useSelector((state) => state.events);
  const [errors, setErrors] = useState(eventState.errors);

  const [fields, setFields] = useState({
    name: eventData.name ? eventData.name : "",
    timeframe: eventData.timeframe ? eventData.timeframe : "",
    details: eventData.details ? eventData.details : "",
    impact: eventData.impact ? eventData.impact : "",
  });

  useEffect(() => {
    setErrors(eventState.errors);
  }, [dispatch, errors]);

  const handleInputChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    return;
  };

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
        timeframe: fields.timeframe,
        details: fields.details,
        impact: fields.impact,
      };

      await dispatch(updateEventDetails(eventData.id, updatedDetails));
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
              id="update-event-name"
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
            <textarea
              id="update-event-timeframe"
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
            <textarea
              id="update-event-details"
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
              id="update-event-impact"
              name="impact"
              value={fields.impact}
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

export default EventDetailsUpdate;
