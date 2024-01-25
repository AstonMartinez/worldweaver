import { GoPencil } from "react-icons/go";
import OpenModalButton from "../../OpenModalButton";

const EventsList = ({ eventData }) => {
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
