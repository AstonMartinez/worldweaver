import "./BooksList.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserBooks } from "../../store/books";

const BooksList = () => {
  const dispatch = useDispatch();
  const userBooks = useSelector((state) => state.books.allBooks);

  useEffect(() => {
    dispatch(fetchUserBooks());
  }, [dispatch]);
  return (
    <div>
      <div>
        <h2>Your Books</h2>
      </div>
      <div>
        {userBooks &&
          Object.values(userBooks).map((book, idx) => (
            <div key={idx}>
              <div>{/* THIS IS WHERE BOOK IMAGE THUMBNAIL WILL GO */}</div>
              <div>{book.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BooksList;
