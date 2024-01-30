import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { updateLocation } from "../../../store/locations";
import { fetchOneBook } from "../../../store/books";

const LocationDetailsUpdate = ({ locationData, bookId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const locationState = useSelector((state) => state.locations);
  const [errors, setErrors] = useState(locationState.errors);

  const [fields, setFields] = useState({
    name: locationData.name ? locationData.name : "",
    description: locationData.description ? locationData.description : "",
  });

  useEffect(() => {
    setErrors(locationState.errors);
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
        description: fields.description,
      };

      await dispatch(updateLocation(locationData.id, updatedDetails));
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
              id="update-location-name"
              name="name"
              value={fields.name}
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
              id="update-location-description"
              name="description"
              value={fields.description}
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

export default LocationDetailsUpdate;
