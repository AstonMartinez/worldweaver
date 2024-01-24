import "./BooksList.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserBooks } from "../../store/books";
import { useHistory } from "react-router-dom";

const BooksList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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
            <div key={idx} onClick={() => history.push(`/books/${book.id}`)}>
              <div>{/* THIS IS WHERE BOOK IMAGE THUMBNAIL WILL GO */}</div>
              <div>{book.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BooksList;
