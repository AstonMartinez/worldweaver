import { GoPencil } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import OpenModalButton from "../../OpenModalButton";
import { useHistory } from "react-router-dom";

const ChaptersList = ({ chapterData }) => {
  const history = useHistory();
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
                <div>
                  <button onClick={() => history.push(`/chapters/${chap.id}`)}>
                    <GoPencil height={18} width={18} />
                  </button>
                  <OpenModalButton
                    buttonText={<IoTrashOutline height={18} width={18} />}
                  />
                </div>
                <div>
                  <h4>{chap.title}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ChaptersList;
