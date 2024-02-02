import { GoPencil } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import RaceDetailsUpdate from "../../BookModals/Update/RaceDetailsUpdate";
import RaceDelete from "../../BookModals/Delete/RaceDelete";
import OpenModalButton from "../../OpenModalButton";

const RacesList = ({ raceData, bookId, locationData }) => {
  return (
    <>
      <div>
        <div>
          <h3>Races</h3>
        </div>
        <div>
          {raceData &&
            raceData.map((race, idx) => (
              <div key={idx} style={{ border: "1px solid black" }}>
                <div>
                  <OpenModalButton
                    buttonText={<GoPencil height={18} width={18} />}
                    modalComponent={
                      <RaceDetailsUpdate
                        raceData={raceData}
                        bookId={bookId}
                        locationData={locationData}
                      />
                    }
                  />
                  <OpenModalButton
                    buttonText={<IoTrashOutline height={18} width={18} />}
                    modalComponent={<RaceDelete race={race} bookId={bookId} />}
                  />
                </div>
                <div>
                  <h4>{race?.name}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RacesList;
