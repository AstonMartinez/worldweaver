import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { deleteBook } from "../../../store/books";
import { useHistory } from "react-router-dom";

const BookDelete = ({ bookData }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { closeModal } = useModal();

  const handleDelete = async () => {
    try {
      toast.loading("Deleting book...", {
        position: "top-center",
        theme: "dark",
        toastId: "loadingToast",
      });

      await dispatch(deleteBook(bookData.id));
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        theme: "dark",
      });
    } finally {
      toast.dismiss("loadingToast");
      toast.success("Successfully deleted", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      history.push("/");
      closeModal();
    }
  };

  return (
    <div>
      <section>
        <button onClick={closeModal}>
          <IoClose height={18} weight={18} />
        </button>
      </section>
      <section>
        <p>Are you sure you want to delete this book?</p>
      </section>
      <section>
        <button onClick={handleDelete}>Yes, Delete</button>
        <button onClick={closeModal}>No, Keep</button>
      </section>
    </div>
  );
};

export default BookDelete;
