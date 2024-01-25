import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useModal } from "../../../context/Modal";

const BookDetailsUpdate = ({ bookData }) => {
  const { closeModal } = useModal();
  const [fields, setFields] = useState({
    title: bookData.title ? bookData.title : "",
    plot: bookData.plot_details ? bookData.plot_details : "",
    styleAndVoice: bookData.style_and_voice ? bookData.style_and_voice : "",
    themes: bookData.themes ? bookData.themes : "",
    genres: bookData.genres ? bookData.genres : "",
    blurb: bookData.blurb ? bookData.blurb : "",
  });

  const handleSubmit = (e) => {};

  const handleInputChange = (e) => {};

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
