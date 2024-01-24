const ChaptersList = ({ chapterData }) => {
  return (
    <>
      <div>
        <div>
          <h3>Chapters</h3>
        </div>
        <div>
          {chapterData &&
            chapterData.map((chap, idx) => (
              <div key={idx} style={{ border: "1px solid black" }}>
                <h4>{chap.title}</h4>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ChaptersList;
