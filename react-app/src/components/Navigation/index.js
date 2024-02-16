import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import OpenModalButton from "../OpenModalButton";
import BaseBookModal from "../Questionnaires/Book/BaseBookModal";
import BaseChapterModal from "../Questionnaires/Chapter/BaseChapterModal";
import BaseCharacterModal from "../Questionnaires/Character/BaseCharacterModal";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
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

  const ulClassName = "questionnaire-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  const menu = (
    <ul className={ulClassName} ref={ulRef}>
      <li>
        <OpenModalButton
          buttonText="Book"
          onItemClick={closeMenu}
          modalComponent={<BaseBookModal />}
        />
      </li>
      <li>
        <OpenModalButton
          buttonText="Chapter"
          onItemClick={closeMenu}
          modalComponent={<BaseChapterModal />}
        />
      </li>
      <li>
        <OpenModalButton
          buttonText="Character"
          onItemClick={closeMenu}
          modalComponent={<BaseCharacterModal />}
        />
      </li>
      <li>Event</li>
      <li>Faction</li>
      <li>Location</li>
      <li>Magic</li>
      <li>Race</li>
      <li>World</li>
    </ul>
  );

  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      {isLoaded && (
        <li>
          <ProfileButton user={sessionUser} />
        </li>
      )}
      {sessionUser && <button onClick={openMenu}>Questionnaires</button>}
      {showMenu && menu}
    </ul>
  );
}

export default Navigation;
