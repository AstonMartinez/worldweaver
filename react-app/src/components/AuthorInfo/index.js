import "./AuthorInfo.css";

const AuthorInfo = ({ authorData }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <h2>Your Author Profile</h2>
      <div>
        <h4>
          Author Name:{" "}
          {authorData.first_name ? (
            authorData.first_name
          ) : (
            <em>Add your first name</em>
          )}{" "}
          {authorData.last_name ? (
            authorData.last_name
          ) : (
            <em>Add your last name</em>
          )}
        </h4>
        <p>
          Your Pseudonym:{" "}
          {authorData.pseudonym ? (
            authorData.pseudonym
          ) : (
            <em>Add a pseudonym if it differs from your first & last name</em>
          )}
        </p>
        <p>Bio:</p>
        <p>{authorData.bio ? authorData.bio : <em>Add your bio</em>}</p>
      </div>
    </div>
  );
};

export default AuthorInfo;
