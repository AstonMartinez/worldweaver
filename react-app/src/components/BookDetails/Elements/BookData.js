import { GoPencil } from "react-icons/go";
import OpenModalButton from "../../OpenModalButton";
import BookDetailsUpdate from "../../BookModals/Update/BookDetailsUpdate";

const boldTextStyle = {
  fontWeight: "bold",
};

const BookData = ({ data }) => {
  return (
    <div>
      <div>
        <OpenModalButton
          buttonText={<GoPencil height={18} width={18} />}
          modalComponent={<BookDetailsUpdate bookData={data} />}
        />
      </div>
      <div>
        <p>
          <span style={boldTextStyle}>Plot Details:</span>{" "}
          <span>
            {data?.plot_details ? (
              data?.plot_details
            ) : (
              <em>You haven't added this data yet</em>
            )}
          </span>
        </p>

        <p>
          <span style={boldTextStyle}>Style and Voice:</span>{" "}
          <span>
            {data?.style_and_voice ? (
              data?.style_and_voice
            ) : (
              <em>You haven't added this data yet</em>
            )}
          </span>
        </p>

        <p>
          <span style={boldTextStyle}>Themes:</span>{" "}
          <span>
            {data?.themes ? (
              data?.themes
            ) : (
              <em>You haven't added this data yet</em>
            )}
          </span>
        </p>

        <p>
          <span style={boldTextStyle}>Genres:</span>{" "}
          <span>
            {data?.genres ? (
              data?.genres
            ) : (
              <em>You haven't added this data yet</em>
            )}
          </span>
        </p>

        <p>
          <span style={boldTextStyle}>Blurb:</span>{" "}
          <span>
            {data?.blurb ? (
              data?.blurb
            ) : (
              <em>You haven't added this data yet</em>
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BookData;
