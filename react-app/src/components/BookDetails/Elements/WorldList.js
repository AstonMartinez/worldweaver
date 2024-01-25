import { GoPencil } from "react-icons/go";
import OpenModalButton from "../../OpenModalButton";

const WorldList = ({ worldData }) => {
  return (
    <>
      <div>
        <div>
          <h3>World</h3>
        </div>
        <div>
          <div></div>
          <div>
            <OpenModalButton buttonText={<GoPencil height={18} width={18} />} />
          </div>
          <h4>{worldData?.name}</h4>
        </div>
      </div>
    </>
  );
};

export default WorldList;
