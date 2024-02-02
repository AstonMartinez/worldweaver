import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useModal } from "../../../context/Modal";
import { toast } from "react-toastify";
import { fetchOneBook } from "../../../store/books";
import { deleteMagic } from "../../../store/magic";

const MagicDelete = ({ magicData, bookId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const magicState = useSelector((state) => state.magic);
  const [errors, setErrors] = useState(magicState.errors);

  useEffect(() => {
    setErrors(magicState.errors);
  }, [dispatch, errors]);

  const handleDelete = async () => {
    try {
      toast.loading("Deleting magic...", {
        position: "top-center",
        theme: "dark",
        toastId: "loadingToast",
      });

      await dispatch(deleteMagic(magicData.id));
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
        dispatch(fetchOneBook(bookId));
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
        <p>Are you sure you want to delete this magic type?</p>
      </section>
      <section>
        <button onClick={handleDelete}>Yes, Delete</button>
        <button onClick={closeModal}>No, Keep</button>
      </section>
    </div>
  );
};

export default MagicDelete;
