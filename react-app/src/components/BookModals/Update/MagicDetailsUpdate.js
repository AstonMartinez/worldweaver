import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { fetchOneBook } from "../../../store/books";
import { updateMagic } from "../../../store/magic";

const MagicDetailsUpdate = ({ magicData, bookId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const magicState = useSelector((state) => state.magic);
  const [errors, setErrors] = useState(magicState.errors);

  const [fields, setFields] = useState({
    name: magicData.name ? magicData.name : "",
    description: magicData.description ? magicData.description : "",
    element: magicData.element ? magicData.element : "",
    rules: magicData.rules ? magicData.rules : "",
    uses: magicData.uses ? magicData.uses : "",
    notes: magicData.notes ? magicData.notes : "",
  });

  useEffect(() => {
    setErrors(magicState.errors);
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
        element: fields.element,
        rules: fields.rules,
        uses: fields.uses,
        notes: fields.notes,
      };

      await dispatch(updateMagic(magicData.id, updatedDetails));
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
              id="update-magic-name"
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
              id="update-magic-description"
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
              id="update-magic-element"
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
              id="update-magic-rules"
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
              id="update-magic-uses"
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
              id="update-magic-notes"
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

export default MagicDetailsUpdate;
