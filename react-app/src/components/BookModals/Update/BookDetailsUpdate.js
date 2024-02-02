import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { fetchOneBook, updateOneBook } from "../../../store/books";

const BookDetailsUpdate = ({ bookData, bookId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const bookState = useSelector((state) => state.books);
  const [errors, setErrors] = useState(bookState.errors);

  const [fields, setFields] = useState({
    title: bookData.title ? bookData.title : "",
    plot: bookData.plot_details ? bookData.plot_details : "",
    styleAndVoice: bookData.style_and_voice ? bookData.style_and_voice : "",
    themes: bookData.themes ? bookData.themes : "",
    genres: bookData.genres ? bookData.genres : "",
    blurb: bookData.blurb ? bookData.blurb : "",
  });

  useEffect(() => {
    setErrors(bookState.errors);
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
        title: fields.title,
        plot_details: fields.plot,
        style_and_voice: fields.styleAndVoice,
        themes: fields.themes,
        genres: fields.genres,
        blurb: fields.blurb,
      };

      await dispatch(updateOneBook(bookData.id, updatedDetails));
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
            <label htmlFor="title">Book Title:</label>
          </div>
          <div>
            <textarea
              id="update-book-title"
              name="title"
              value={fields.title}
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
              id="update-book-plot"
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
            <input
              type="text"
              id="update-book-style-voice"
              name="styleAndVoice"
              value={fields.styleAndVoice}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="themes">Themes:</label>
          </div>
          <div>
            <input
              type="text"
              id="update-book-themes"
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
            <input
              type="text"
              id="update-book-genres"
              name="genres"
              value={fields.genres}
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
              id="update-book-blurb"
              name="blurb"
              value={fields.blurb}
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

export default BookDetailsUpdate;
