import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { createBook, fetchUserBooks } from "../../../store/books";

const CreateBook = () => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [fields, setFields] = useState({
    title: "",
    blurb: "",
    themes: "",
    genres: "",
    plot: "",
    styleAndVoice: "",
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

      const bookDetails = {
        title: fields.title,
        plot_details: fields.plot,
        style_and_voice: fields.styleAndVoice,
        themes: fields.themes,
        genres: fields.genres,
        blurb: fields.blurb,
      };

      await dispatch(createBook(bookDetails));
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
      dispatch(fetchUserBooks());
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
          <h3>Create a Book</h3>
        </section>
        <section>
          <div>
            <label htmlFor="title">Title:</label>
          </div>
          <div>
            <input
              type="text"
              id="create-book-title"
              name="title"
              value={fields.title}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="blurb">Blurb:</label>
          </div>
          <div>
            <textarea
              id="create-book-blurb"
              name="blurb"
              value={fields.blurb}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="themes">Themes:</label>
          </div>
          <div>
            <textarea
              id="create-book-themes"
              name="themes"
              value={fields.themes}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="genres">Genres:</label>
          </div>
          <div>
            <textarea
              id="create-book-genres"
              name="genres"
              value={fields.genres}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="plot">Plot Details:</label>
          </div>
          <div>
            <textarea
              id="create-book-plot"
              name="plot"
              value={fields.plot}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="styleAndVoice">Style & Voice:</label>
          </div>
          <div>
            <textarea
              id="create-book-styleAndVoice"
              name="styleAndVoice"
              value={fields.styleAndVoice}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <button type="submit">Create Book</button>
        </section>
      </form>
    </div>
  );
};

export default CreateBook;
