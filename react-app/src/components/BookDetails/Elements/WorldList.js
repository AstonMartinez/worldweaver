import { GoPencil } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import WorldDelete from "../../BookModals/Delete/WorldDelete";
import WorldDetailsUpdate from "../../BookModals/Update/WorldDetailsUpdate";
import OpenModalButton from "../../OpenModalButton";
import { IoMdAdd } from "react-icons/io";

const WorldList = ({ worldData, bookId }) => {
  return (
    <>
      <div>
        <div>
          <h3>World</h3>
        </div>
        {worldData?.name && (
          <div>
            <div></div>
            <div>
              <OpenModalButton
                buttonText={<GoPencil height={18} width={18} />}
                modalComponent={
                  <WorldDetailsUpdate worldData={worldData} bookId={bookId} />
                }
              />
              <OpenModalButton
                buttonText={<IoTrashOutline height={18} width={18} />}
                modalComponent={
                  <WorldDelete worldData={worldData} bookId={bookId} />
                }
              />
            </div>
            <h4>{worldData?.name}</h4>
          </div>
        )}
        {!worldData?.name && (
          <OpenModalButton buttonText={<IoMdAdd height={18} width={18} />} />
        )}
      </div>
    </>
  );
};

export default WorldList;
