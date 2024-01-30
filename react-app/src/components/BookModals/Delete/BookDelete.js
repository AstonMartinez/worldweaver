import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { deleteBook } from "../../../store/books";
import { useHistory } from "react-router-dom";

const BookDelete = ({ bookData }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const bookState = useSelector((state) => state.books);
  const [errors, setErrors] = useState(bookState.errors);
  const { closeModal } = useModal();

  useEffect(() => {
    setErrors(bookState.errors);
  }, [dispatch, errors]);

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
      if (errors.length === 0) {
        toast.success("Successfully deleted", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
        });
        history.push("/");
        closeModal();
      } else {
        for (let i = 0; i < errors.length; i++) {
          toast.error(errors[i], {
            position: "top-center",
            theme: "dark",
          });
        }
        return;
      }
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
