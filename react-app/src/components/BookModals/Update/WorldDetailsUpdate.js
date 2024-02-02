import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { updateWorld } from "../../../store/worlds";
import { fetchOneBook } from "../../../store/books";

const WorldDetailsUpdate = ({ worldData, bookId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const worldState = useSelector((state) => state.worlds);
  const [errors, setErrors] = useState(worldState.errors);

  const [fields, setFields] = useState({
    name: worldData.name ? worldData.name : "",
    description: worldData.description ? worldData.description : "",
    notes: worldData.notes ? worldData.notes : "",
    landscape: worldData.landscape ? worldData.landscape : "",
    resources: worldData.resources ? worldData.resources : "",
    seasons: worldData.seasons ? worldData.seasons : "",
    weather: worldData.weather ? worldData.weather : "",
    animals: worldData.animals ? worldData.animals : "",
    plants: worldData.plants ? worldData.plants : "",
  });

  useEffect(() => {
    setErrors(worldState.errors);
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
        notes: fields.notes,
        landscape: fields.landscape,
        natural_resources: fields.resources,
        seasons: fields.seasons,
        weather: fields.weather,
        animals: fields.animals,
        plants: fields.plants,
      };

      await dispatch(updateWorld(worldData.id, updatedDetails));
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
              id="update-world-name"
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
              id="update-world-description"
              name="description"
              value={fields.description}
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
              id="update-world-notes"
              name="notes"
              value={fields.notes}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="landscape">Landscape:</label>
          </div>
          <div>
            <textarea
              id="update-world-landscape"
              name="landscape"
              value={fields.landscape}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="resources">Natural Resources:</label>
          </div>
          <div>
            <textarea
              id="update-world-resources"
              name="resources"
              value={fields.resources}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="seasons">Seasons:</label>
          </div>
          <div>
            <textarea
              id="update-world-seasons"
              name="seasons"
              value={fields.seasons}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="weather">Weather:</label>
          </div>
          <div>
            <textarea
              id="update-world-weather"
              name="weather"
              value={fields.weather}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="animals">Animals:</label>
          </div>
          <div>
            <textarea
              id="update-world-animals"
              name="animals"
              value={fields.animals}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="plants">Plants:</label>
          </div>
          <div>
            <textarea
              id="update-world-plants"
              name="plants"
              value={fields.plants}
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

export default WorldDetailsUpdate;
