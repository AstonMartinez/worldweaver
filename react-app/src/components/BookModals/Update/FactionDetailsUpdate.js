import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { updateFactionDetails } from "../../../store/factions";
import { fetchOneBook } from "../../../store/books";

const FactionDetailsUpdate = ({ factionData, bookId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [fields, setFields] = useState({
    name: factionData.name ? factionData.name : "",
    details: factionData.details ? factionData.details : "",
    allegiance: factionData.allegiance ? factionData.allegiance : "",
  });

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
        details: fields.details,
        allegiance: fields.allegiance,
      };

      await dispatch(updateFactionDetails(factionData.id, updatedDetails));
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        theme: "dark",
      });
    } finally {
      toast.dismiss("loadingToast");
      toast.success("Successfully updated!", {
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
          <div>
            <label htmlFor="name">Name:</label>
          </div>
          <div>
            <input
              type="text"
              id="update-faction-name"
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
              id="update-faction-details"
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
            <textarea
              id="update-faction-allegiance"
              name="allegiance"
              value={fields.allegiance}
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

export default FactionDetailsUpdate;
