import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { fetchOneBook } from "../../../store/books";
import { createLocation } from "../../../store/locations";

const CreateLocation = ({ bookId, world }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const locationState = useSelector((state) => state.locations);
  const [errors, setErrors] = useState(locationState.errors);
  const [fields, setFields] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    setErrors(locationState.errors);
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

      const locDetails = {
        world_id: world.id,
        book_id: bookId,
        name: fields.name,
        description: fields.description,
      };

      await dispatch(createLocation(locDetails));
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
      <form onSubmit={(e) => handleSubmit(e)}>
        <section>
          <h3>Create a Location</h3>
        </section>
        <section>
          <div>
            <label htmlFor="name">Name:</label>
          </div>
          <div>
            <input
              type="text"
              id="create-location-name"
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
              id="create-location-description"
              name="description"
              value={fields.description}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        {/* <section>
          <div>
            <label htmlFor="world_id">World:</label>
          </div>
          <div>
            <select
              name="world_id"
              onChange={(e) => handleInputChange(e)}
              value={fields.world_id}
            >
              {worlds.map((world, idx) => (
                <option key={idx} value={world.name}>
                  {world.name}
                </option>
              ))}
            </select>
          </div>
        </section> */}
        <section>
          <button type="submit">Create Location</button>
        </section>
      </form>
    </div>
  );
};

export default CreateLocation;
