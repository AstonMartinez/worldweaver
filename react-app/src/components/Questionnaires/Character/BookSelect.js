import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserBooks } from "../../../store/books";

const BookSelect = ({ setBook }) => {
  const dispatch = useDispatch();
  const userBooks = useSelector((state) => state.books.allBooks);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    dispatch(fetchUserBooks());
  }, [dispatch]);

  return (
    <>
      <div>
        <p>Which book would you like to create a questionnaire for?</p>
      </div>
      <div>
        {Object.values(userBooks).map((bk) => (
          <div onClick={() => setSelectedBook(bk)}>{bk.title}</div>
        ))}
      </div>
      <div>
        <button onClick={() => setBook(selectedBook)}>Save & Continue</button>
      </div>
    </>
  );
};

export default BookSelect;
