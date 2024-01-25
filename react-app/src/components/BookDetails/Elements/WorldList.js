import { GoPencil } from "react-icons/go";
import WorldDetailsUpdate from "../../BookModals/Update/WorldDetailsUpdate";
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
            <OpenModalButton
              buttonText={<GoPencil height={18} width={18} />}
              modalComponent={<WorldDetailsUpdate worldData={worldData} />}
            />
          </div>
          <h4>{worldData?.name}</h4>
        </div>
      </div>
    </>
  );
};

export default WorldList;
