import { GoPencil } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import StoryElementDelete from "../../BookModals/Delete/StoryElementDelete";
import StoryElementUpdate from "../../BookModals/Update/StoryElementUpdate";
import OpenModalButton from "../../OpenModalButton";

const StoryElementList = ({ elemData, bookId }) => {
  return (
    <>
      <div>
        <div>
          <h3>Story Elements</h3>
        </div>
        <div>
          {elemData &&
            elemData.map((elem, idx) => (
              <div key={idx} style={{ border: "1px solid black" }}>
                <div>
                  <OpenModalButton
                    buttonText={<GoPencil height={18} width={18} />}
                    modalComponent={
                      <StoryElementUpdate elemData={elem} bookId={bookId} />
                    }
                  />
                  <OpenModalButton
                    buttonText={<IoTrashOutline height={18} width={18} />}
                    modalComponent={
                      <StoryElementDelete element={elem} bookId={bookId} />
                    }
                  />
                </div>
                <div>
                  <h4>{elem?.name}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default StoryElementList;
