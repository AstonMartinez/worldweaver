import "./index";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div>
      <h1>Welcome to WorldWeaver!</h1>
      <div>
        <img src="worldweaver-lp.jpg" alt="landing page art" />
      </div>
    </div>
  );
};

export default LandingPage;
