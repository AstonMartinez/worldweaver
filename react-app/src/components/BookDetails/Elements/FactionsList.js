import { GoPencil } from "react-icons/go";
import OpenModalButton from "../../OpenModalButton";

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
                <div>
                  <OpenModalButton
                    buttonText={<GoPencil height={18} width={18} />}
                  />
                </div>
                <div>
                  <h4>{fac.name}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FactionsList;
