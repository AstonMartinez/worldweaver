import { GoPencil } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import OpenModalButton from "../../OpenModalButton";

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
                <div>
                  <OpenModalButton
                    buttonText={<GoPencil height={18} width={18} />}
                  />
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
