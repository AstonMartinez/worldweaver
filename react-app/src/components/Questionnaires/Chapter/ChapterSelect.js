import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChapterByBook } from "../../../store/chapters";

const ChapterSelect = ({ bookId, setChap }) => {
  const dispatch = useDispatch();
  const bookChapters = useSelector((state) => state.chapters.allChapters);
  const [selectedChapter, setSelectedChapter] = useState(null);

  useEffect(() => {
    dispatch(fetchChapterByBook(bookId));
  }, [dispatch]);

  return (
    <>
      <div>
        <p>Which chapter would you like to create a questionnaire for?</p>
      </div>
      <div>
        {bookChapters?.map((chap) => (
          <div onClick={() => setSelectedChapter(chap)}>{chap.title}</div>
        ))}
      </div>
      <div>
        <button onClick={() => setChap(selectedChapter)}>
          Save & Continue
        </button>
      </div>
    </>
  );
};

export default ChapterSelect;
