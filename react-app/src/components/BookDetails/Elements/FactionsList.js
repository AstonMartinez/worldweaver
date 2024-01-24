const FactionsList = ({ factionData }) => {
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
                <h4>{fac.name}</h4>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FactionsList;
