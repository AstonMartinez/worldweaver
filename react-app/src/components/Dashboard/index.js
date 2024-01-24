import BooksList from "../BooksList";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthorInfo from "../AuthorInfo";

const Dashboard = () => {
  const history = useHistory();
  const author = useSelector((state) => state.session.user);

  return (
    <div>
      <div>
        <h1>
          Welcome, {author.first_name ? author.first_name : author.username}!
        </h1>
      </div>
      <div>
        <div>
          <AuthorInfo authorData={author} />
        </div>
      </div>
      <div>
        <BooksList />
      </div>
    </div>
  );
};

export default Dashboard;
