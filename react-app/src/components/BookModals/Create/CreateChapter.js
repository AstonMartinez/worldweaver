import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { createChapter } from "../../../store/chapters";

const CreateChapter = ({ bookId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();
  const chapterState = useSelector((state) => state.chapters);
  const [errors, setErrors] = useState(chapterState.errors);
  const [fields, setFields] = useState({
    title: "",
    highlights: "",
  });

  useEffect(() => {
    setErrors(chapterState.errors);
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

      const chapterDetails = {
        book_id: bookId,
        title: fields.title,
        highlights: fields.highlights,
      };

      await dispatch(createChapter(chapterDetails));
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
        closeModal();
        history.push(`/chapters/${chapterState.singleChapter.id}`);
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
          <h3>Create a Chapter</h3>
          <p>
            Once you press submit, you'll be redirected to a page where you can
            work on your draft of this chapter!
          </p>
        </section>
        <section>
          <div>
            <label htmlFor="title">Title:</label>
          </div>
          <div>
            <input
              type="text"
              id="create-chapter-title"
              name="title"
              value={fields.title}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="highlights">Highlights:</label>
          </div>
          <div>
            <textarea
              id="create-chapter-highlights"
              name="highlights"
              value={fields.highlights}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <button type="submit">Create Chapter</button>
        </section>
      </form>
    </div>
  );
};

export default CreateChapter;
