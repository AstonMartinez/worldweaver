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
          {bookData?.bookDetails?.title
            ? bookData?.bookDetails?.title
            : "Untitled"}
        </h1>
      </div>
      <div>
        <BookData data={bookData.bookDetails} bookId={bookId} />
      </div>
      <div>
        <WorldList worldData={bookData.bookWorld} bookId={bookId} />
        <LocationsList locationData={bookData.bookLocations} bookId={bookId} />
        <CharactersList
          characterData={bookData.bookCharacters}
          factionsData={bookData.bookFactions}
          bookId={bookId}
        />
        <EventsList eventData={bookData.bookEvents} bookId={bookId} />
        <FactionsList factionData={bookData.bookFactions} bookId={bookId} />
        <ChaptersList chapterData={bookData.bookChapters} bookId={bookId} />
      </div>
    </>
  );
};

export default BookDetails;
