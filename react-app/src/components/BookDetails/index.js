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
      <OpenModalButton buttonText="World" onItemClick={closeMenu} />
      <OpenModalButton buttonText="Location" onItemClick={closeMenu} />
      <OpenModalButton buttonText="Character" onItemClick={closeMenu} />
      <OpenModalButton buttonText="Event" onItemClick={closeMenu} />
      <OpenModalButton buttonText="Faction" onItemClick={closeMenu} />
      <OpenModalButton buttonText="Chapter" onItemClick={closeMenu} />
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
        <EventsList eventData={bookData.bookEvents} bookId={bookId} />
        <FactionsList factionData={bookData.bookFactions} bookId={bookId} />
        <ChaptersList chapterData={bookData.bookChapters} bookId={bookId} />
      </div>
    </>
  );
};

export default BookDetails;
