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

const BookDetails = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const bookData = useSelector((state) => state.books.singleBook);

  useEffect(() => {
    dispatch(fetchOneBook(bookId));
  }, [dispatch]);
  return (
    <>
      <div>{/* THIS IS WHERE BOOK TITLE WILL GO */}</div>
      <div>{/* THIS IS WHERE ALL RELEVANT BOOK DETAILS WILL GO */}</div>
      <div>
        {/* THIS IS WHERE EACH INDIVIDUAL ELEMENT WILL BE LISTED */}
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
