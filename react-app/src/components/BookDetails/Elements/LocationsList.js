import { GoPencil } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import LocationDelete from "../../BookModals/Delete/LocationDelete";
import LocationDetailsUpdate from "../../BookModals/Update/LocationDetailsUpdate";
import OpenModalButton from "../../OpenModalButton";

const LocationsList = ({ locationData, bookId }) => {
  return (
    <>
      <div>
        <div>
          <h3>Locations</h3>
        </div>
        <div>
          {locationData &&
            locationData.map((loc, idx) => (
              <div key={idx} style={{ border: "1px solid black" }}>
                <div>
                  <OpenModalButton
                    buttonText={<GoPencil height={18} width={18} />}
                    modalComponent={
                      <LocationDetailsUpdate
                        locationData={loc}
                        bookId={bookId}
                      />
                    }
                  />
                  <OpenModalButton
                    buttonText={<IoTrashOutline height={18} width={18} />}
                    modalComponent={
                      <LocationDelete locationData={loc} bookId={bookId} />
                    }
                  />
                </div>
                <div>
                  <h4>{loc?.name}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default LocationsList;
