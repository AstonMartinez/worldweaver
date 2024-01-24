import "./BookDetails.css";
import ChaptersList from "./Elements/ChaptersList";
import CharactersList from "./Elements/CharactersList";
import EventsList from "./Elements/EventsList";
import FactionsList from "./Elements/FactionsList";
import LocationsList from "./Elements/LocationsList";
import WorldList from "./Elements/WorldList";

const BookDetails = () => {
  return (
    <>
      <div>{/* THIS IS WHERE BOOK TITLE WILL GO */}</div>
      <div>{/* THIS IS WHERE ALL RELEVANT BOOK DETAILS WILL GO */}</div>
      <div>
        {/* THIS IS WHERE EACH INDIVIDUAL ELEMENT WILL BE LISTED */}
        <WorldList />
        <LocationsList />
        <CharactersList />
        <EventsList />
        <FactionsList />
        <ChaptersList />
      </div>
    </>
  );
};

export default BookDetails;
