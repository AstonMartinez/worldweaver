import { GoPencil } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import MagicDelete from "../../BookModals/Delete/MagicDelete";
import MagicDetailsUpdate from "../../BookModals/Update/MagicDetailsUpdate";
import OpenModalButton from "../../OpenModalButton";

const MagicList = ({ magicData, bookId }) => {
  return (
    <>
      <div>
        <div>
          <h3>Magic Types</h3>
        </div>
        <div>
          {magicData &&
            magicData.map((mag, idx) => (
              <div key={idx} style={{ border: "1px solid black" }}>
                <div>
                  <OpenModalButton
                    buttonText={<GoPencil height={18} width={18} />}
                    modalComponent={
                      <MagicDetailsUpdate magicData={mag} bookId={bookId} />
                    }
                  />
                  <OpenModalButton
                    buttonText={<IoTrashOutline height={18} width={18} />}
                    modalComponent={
                      <MagicDelete magicData={mag} bookId={bookId} />
                    }
                  />
                </div>
                <div>
                  <h4>{mag?.name}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MagicList;
