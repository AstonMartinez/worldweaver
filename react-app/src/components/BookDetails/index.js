import "./BookDetails.css";
import ChaptersList from "./Elements/ChaptersList";
import CharactersList from "./Elements/CharactersList";
import EventsList from "./Elements/EventsList";
import FactionsList from "./Elements/FactionsList";
import LocationsList from "./Elements/LocationsList";
import WorldList from "./Elements/WorldList";
import { useParams } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneBook } from "../../store/books";
import BookData from "./Elements/BookData";
import { IoMdAdd } from "react-icons/io";
import OpenModalButton from "../OpenModalButton";
import CreateWorld from "../BookModals/Create/CreateWorld";
import CreateLocation from "../BookModals/Create/CreateLocation";
import CreateCharacter from "../BookModals/Create/CreateCharacter";
import CreateFaction from "../BookModals/Create/CreateFaction";
import CreateEvent from "../BookModals/Create/CreateEvent";
import CreateChapter from "../BookModals/Create/CreateChapter";
import RacesList from "./Elements/RacesList";
import CreateRace from "../BookModals/Create/CreateRace";

const BookDetails = () => {
  const dispatch = useDispatch();
  const { bookId } = useParams();
  const bookData = useSelector((state) => state.books.singleBook);

  useEffect(() => {
    dispatch(fetchOneBook(bookId));
  }, [dispatch]);

  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const ulClassName = "create-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  const addMenu = (
    <ul className={ulClassName} ref={ulRef}>
      <OpenModalButton
        buttonText="World"
        onItemClick={closeMenu}
        modalComponent={<CreateWorld bookId={bookId} />}
      />
      <OpenModalButton
        buttonText="Location"
        onItemClick={closeMenu}
        modalComponent={
          <CreateLocation bookId={bookId} world={bookData.bookWorld} />
        }
      />
      <OpenModalButton
        buttonText="Character"
        onItemClick={closeMenu}
        modalComponent={
          <CreateCharacter
            bookId={bookId}
            factionsData={bookData.bookFactions}
            world={bookData.bookWorld}
            raceData={bookData.bookRaces}
          />
        }
      />
      <OpenModalButton
        buttonText="Faction"
        onItemClick={closeMenu}
        modalComponent={
          <CreateFaction
            bookId={bookId}
            locationData={bookData.bookLocations}
          />
        }
      />
      <OpenModalButton
        buttonText="Event"
        onItemClick={closeMenu}
        modalComponent={
          <CreateEvent
            bookId={bookId}
            world={bookData.bookWorld}
            locationData={bookData.bookLocations}
          />
        }
      />
      <OpenModalButton
        buttonText="Chapter"
        onItemClick={closeMenu}
        modalComponent={<CreateChapter bookId={bookId} />}
      />
      <OpenModalButton
        buttonText="Race"
        onItemClick={closeMenu}
        modalComponent={
          <CreateRace
            bookId={bookId}
            world={bookData?.bookWorld}
            locationData={bookData.bookLocations}
          />
        }
      />
      <OpenModalButton buttonText="Story Element" onItemClick={closeMenu} />
      <OpenModalButton buttonText="Magic" onItemClick={closeMenu} />
    </ul>
  );
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
        <button onClick={openMenu}>
          {<IoMdAdd height={18} width={18} />} Add
        </button>
        {addMenu}
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
        <RacesList
          raceData={bookData.bookRaces}
          bookId={bookId}
          locationData={bookData.bookLocations}
        />
        <EventsList eventData={bookData.bookEvents} bookId={bookId} />
        <FactionsList factionData={bookData.bookFactions} bookId={bookId} />
        <ChaptersList chapterData={bookData.bookChapters} bookId={bookId} />
      </div>
    </>
  );
};

export default BookDetails;
