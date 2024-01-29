import { GoPencil } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import EventDelete from "../../BookModals/Delete/EventDelete";
import EventDetailsUpdate from "../../BookModals/Update/EventDetailsUpdate";
import OpenModalButton from "../../OpenModalButton";

const EventsList = ({ eventData, bookId }) => {
  return (
    <>
      <div>
        <div>
          <h3>Events</h3>
        </div>
        <div>
          {eventData &&
            eventData.map((event, idx) => (
              <div key={idx} style={{ border: "1px solid black" }}>
                <div>
                  <OpenModalButton
                    buttonText={<GoPencil height={18} width={18} />}
                    modalComponent={
                      <EventDetailsUpdate eventData={event} bookId={bookId} />
                    }
                  />
                  <OpenModalButton
                    buttonText={<IoTrashOutline height={18} width={18} />}
                    modalComponent={
                      <EventDelete eventData={event} bookId={bookId} />
                    }
                  />
                </div>
                <div>
                  <h4>{event?.name}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default EventsList;
