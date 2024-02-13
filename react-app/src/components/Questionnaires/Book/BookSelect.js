import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const BookSelect = ({ setSelectedBookId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p>Which book would you like to create a questionnaire for?</p>
      </div>
      <div>
        {/* THIS IS WHERE WE WILL MAP USER BOOKS & INCLUDE OPTION TO CREATE A NEW BOOK WITH THE QUESTIONNAIRE */}
      </div>
    </>
  );
};

export default BookSelect;
