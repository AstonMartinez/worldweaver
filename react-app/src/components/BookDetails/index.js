import "./BookDetails.css";
import ChaptersList from "./Elements/ChaptersList";
import CharactersList from "./Elements/CharactersList";
import EventsList from "./Elements/EventsList";
import FactionsList from "./Elements/FactionsList";
import LocationsList from "./Elements/LocationsList";
import WorldList from "./Elements/WorldList";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneBook } from "../../store/books";
import BookData from "./Elements/BookData";

const BookDetails = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const bookData = useSelector((state) => state.books.singleBook);

  useEffect(() => {
    dispatch(fetchOneBook(bookId));
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>
          {bookData.bookDetails.title ? bookData.bookDetails.title : "Untitled"}
        </h1>
      </div>
      <div>
        <BookData data={bookData.bookDetails} />
      </div>
      <div>
        <WorldList worldData={bookData.bookWorld} />
        <LocationsList locationData={bookData.bookLocations} />
        <CharactersList characterData={bookData.bookCharacters} />
        <EventsList eventData={bookData.bookEvents} />
        <FactionsList factionData={bookData.bookFactions} />
        <ChaptersList chapterData={bookData.bookChapters} />
      </div>
    </>
  );
};

export default BookDetails;
