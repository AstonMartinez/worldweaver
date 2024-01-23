import BooksList from "../BooksList";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div>
        <h1>Welcome!</h1>
      </div>
      <div>{/* THIS IS WHERE AUTHOR DETAILS WILL GO */}</div>
      <div>
        <BooksList />
      </div>
    </div>
  );
};

export default Dashboard;
