import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

const NavDots = ({ pageNum }) => {
  return (
    <div>
      {pageNum >= 1 ? (
        <GoDotFill height={18} width={18} />
      ) : (
        <GoDot height={18} width={18} />
      )}
      {pageNum >= 2 ? (
        <GoDotFill height={18} width={18} />
      ) : (
        <GoDot height={18} width={18} />
      )}
      {pageNum >= 3 ? (
        <GoDotFill height={18} width={18} />
      ) : (
        <GoDot height={18} width={18} />
      )}
      {pageNum >= 4 ? (
        <GoDotFill height={18} width={18} />
      ) : (
        <GoDot height={18} width={18} />
      )}
      {pageNum >= 5 ? (
        <GoDotFill height={18} width={18} />
      ) : (
        <GoDot height={18} width={18} />
      )}
      {pageNum >= 6 ? (
        <GoDotFill height={18} width={18} />
      ) : (
        <GoDot height={18} width={18} />
      )}
      {pageNum >= 7 ? (
        <GoDotFill height={18} width={18} />
      ) : (
        <GoDot height={18} width={18} />
      )}
      {pageNum >= 8 ? (
        <GoDotFill height={18} width={18} />
      ) : (
        <GoDot height={18} width={18} />
      )}
    </div>
  );
};

export default NavDots;
