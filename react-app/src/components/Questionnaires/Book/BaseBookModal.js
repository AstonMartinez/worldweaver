import { useState } from "react";
import BookSelect from "./BookSelect";

const BaseBookModal = () => {
  const [modalPage, setModalPage] = useState(1);
  const [selectedBookId, setSelectedBookId] = useState(null);
  return (
    <div>
      <div>
        <h2>Create a New Book Questionnaire</h2>
      </div>
      <div>
        {modalPage === 1 && (
          <BookSelect setSelectedBookId={setSelectedBookId} />
        )}
      </div>
    </div>
  );
};

export default BaseBookModal;
