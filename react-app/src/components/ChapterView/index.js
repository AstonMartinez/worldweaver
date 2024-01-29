import "./ChapterView.css";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchChapter, updateChapter } from "../../store/chapters";
import { toast } from "react-toastify";

const ChapterView = () => {
  const { chapterId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const chapterData = useSelector((state) => state.chapters.singleChapter);
  console.log(chapterData.title);

  const [fields, setFields] = useState({
    title: chapterData.title ? chapterData.title : "",
    highlights: chapterData.highlights ? chapterData.highlights : "",
    draft: chapterData.draft ? chapterData.draft : "",
  });

  useEffect(() => {
    dispatch(fetchChapter(chapterId)).then(() => {
      setFields({
        title: chapterData.title ? chapterData.title : "",
        highlights: chapterData.highlights ? chapterData.highlights : "",
        draft: chapterData.draft ? chapterData.draft : "",
      });
    });
  }, [dispatch]);

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
        title: fields.title,
        highlights: fields.highlights,
        draft: fields.draft,
      };

      await dispatch(updateChapter(chapterId, updatedDetails));
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        theme: "dark",
      });
    } finally {
      toast.dismiss("loadingToast");
    }
  };

  return (
    <div>
      <section>
        <button onClick={() => history.push(`/books/${chapterId}`)}>
          <IoIosArrowBack height={18} weight={18} /> Return to Book Details
        </button>
      </section>
      <form onSubmit={(e) => handleSubmit(e)}>
        <section>
          <div>
            <label htmlFor="title">Title:</label>
          </div>
          <div>
            <input
              type="text"
              id="update-chapter-title"
              name="name"
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
              id="update-chapter-highlights"
              name="highlights"
              value={fields.highlights}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="draft">Draft:</label>
          </div>
          <div>
            <textarea
              id="update-chapter-draft"
              name="draft"
              value={fields.draft}
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

export default ChapterView;
