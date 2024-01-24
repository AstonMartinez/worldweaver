const LocationsList = ({ locationData }) => {
  return (
    <>
      <div>
        <div>
          <h3>World Locations</h3>
        </div>
        <div>
          {locationData &&
            locationData.map((loc, idx) => (
              <div key={idx} style={{ border: "1px solid black" }}>
                <h4>{loc?.name}</h4>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default LocationsList;
