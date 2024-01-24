const CharactersList = ({ characterData }) => {
  return (
    <>
      <div>
        <div>
          <h3>Characters</h3>
        </div>
        <div>
          {characterData &&
            characterData.map((char, idx) => (
              <div key={idx} style={{ border: "1px solid black" }}>
                <h4>{char?.name}</h4>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CharactersList;
