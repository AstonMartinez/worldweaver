const WorldList = ({ worldData }) => {
  return (
    <>
      <div>
        <div>
          <h3>Book World</h3>
        </div>
        <div>
          <h4>{worldData?.name}</h4>
        </div>
      </div>
    </>
  );
};

export default WorldList;
