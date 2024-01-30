import { GoPencil } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import FactionDelete from "../../BookModals/Delete/FactionDelete";
import FactionDetailsUpdate from "../../BookModals/Update/FactionDetailsUpdate";
import OpenModalButton from "../../OpenModalButton";

const FactionsList = ({ factionData, bookId }) => {
  return (
    <>
      <div>
        <div>
          <h3>Factions</h3>
        </div>
        <div>
          {factionData &&
            factionData.map((fac, idx) => (
              <div key={idx} style={{ border: "1px solid black" }}>
                <div>
                  <OpenModalButton
                    buttonText={<GoPencil height={18} width={18} />}
                    modalComponent={
                      <FactionDetailsUpdate factionData={fac} bookId={bookId} />
                    }
                  />
                  <OpenModalButton
                    buttonText={<IoTrashOutline height={18} width={18} />}
                    modalComponent={
                      <FactionDelete factionData={fac} bookId={bookId} />
                    }
                  />
                </div>
                <div>
                  <h4>{fac.name}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FactionsList;
