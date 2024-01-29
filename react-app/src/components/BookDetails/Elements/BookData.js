import { GoPencil } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import OpenModalButton from "../../OpenModalButton";
import BookDetailsUpdate from "../../BookModals/Update/BookDetailsUpdate";
import BookDelete from "../../BookModals/Delete/BookDelete";

const boldTextStyle = {
  fontWeight: "bold",
};

const BookData = ({ data, bookId }) => {
  return (
    <div>
      <div>
        <OpenModalButton
          buttonText={<GoPencil height={18} width={18} />}
          modalComponent={<BookDetailsUpdate bookData={data} bookId={bookId} />}
        />
        <OpenModalButton
          buttonText={<IoTrashOutline height={18} width={18} />}
          modalComponent={<BookDelete bookData={data} bookId={bookId} />}
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
