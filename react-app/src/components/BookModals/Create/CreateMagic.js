import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { fetchOneBook } from "../../../store/books";
import { createMagic } from "../../../store/magic";

const CreateMagic = ({ bookId, world }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const locationState = useSelector((state) => state.locations);
  const [errors, setErrors] = useState(locationState.errors);
  const [fields, setFields] = useState({
    name: "",
    description: "",
    element: "",
    rules: "",
    uses: "",
    notes: "",
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

      const magDetails = {
        world_id: world.id,
        book_id: bookId,
        name: fields.name,
        description: fields.description,
        element: fields.element,
        rules: fields.rules,
        uses: fields.uses,
        notes: fields.notes,
      };

      await dispatch(createMagic(magDetails));
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
          <h3>Create a Magic Type</h3>
        </section>
        <section>
          <div>
            <label htmlFor="name">Name:</label>
          </div>
          <div>
            <input
              type="text"
              id="create-magic-name"
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
              id="create-magic-description"
              name="description"
              value={fields.description}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="element">Element:</label>
          </div>
          <div>
            <input
              type="text"
              id="create-magic-element"
              name="element"
              value={fields.element}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="rules">Rules:</label>
          </div>
          <div>
            <textarea
              id="create-magic-rules"
              name="rules"
              value={fields.rules}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="uses">Uses:</label>
          </div>
          <div>
            <textarea
              id="create-magic-uses"
              name="uses"
              value={fields.uses}
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
              id="create-magic-notes"
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

export default CreateMagic;
