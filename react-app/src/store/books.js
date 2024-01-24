const GET_USER_BOOKS = "books/getUser";

const getUser = (data) => ({
  type: GET_USER_BOOKS,
  payload: data,
});

export const fetchUserBooks = () => async (dispatch) => {
  try {
    const response = await fetch("/api/books/user");

    if (response.ok) {
      const data = await response.json();
      dispatch(getUser(data));
      return data;
    } else {
      const error = await response.json();
      return error;
    }
  } catch (error) {
    console.log(error);
  }
};

const initialState = { allBooks: {}, singleBook: {} };

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_BOOKS:
      const newState = Object.assign({ ...state });
      newState.allBooks = action.payload;
      return newState;
    default:
      return state;
  }
}
