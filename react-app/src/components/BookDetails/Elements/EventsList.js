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
                <h4>{event?.name}</h4>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default EventsList;
