const GET_USER_BOOKS = "books/getUser";
const GET_SINGLE_BOOK = "books/getOne";
const UPDATE_BOOK = "books/updateOne";
const DELETE_BOOK = "books/deleteOne";
const CREATE_BOOK = "books/addOne";
const ERROR_MESSAGE = "books/errorMsg";

const getUser = (data) => ({
  type: GET_USER_BOOKS,
  payload: data,
});

const getOne = (data) => ({
  type: GET_SINGLE_BOOK,
  payload: data,
});

const updateOne = (data) => ({
  type: UPDATE_BOOK,
  payload: data,
});

const deleteOne = (data) => ({
  type: DELETE_BOOK,
  payload: data,
});

const addOne = (data) => ({
  type: CREATE_BOOK,
  payload: data,
});

const errorMsg = (data) => ({
  type: ERROR_MESSAGE,
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
      dispatch(errorMsg(error["errors"]));
      return error;
    }
  } catch (error) {
    dispatch(errorMsg(error["errors"]));
    return error;
  }
};

export const fetchOneBook = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/books/${id}`);

    if (response.ok) {
      const data = await response.json();
      dispatch(getOne(data));
      return data;
    } else {
      const error = await response.json();
      dispatch(errorMsg(error["errors"]));
      return error;
    }
  } catch (error) {
    dispatch(errorMsg(error["errors"]));
    return error;
  }
};

export const updateOneBook = (id, bookInfo) => async (dispatch) => {
  try {
    const response = await fetch(`/api/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookInfo),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(updateOne(data));
      return data;
    } else {
      const error = await response.json();
      dispatch(errorMsg(error["errors"]));
      return error;
    }
  } catch (error) {
    dispatch(errorMsg(error["errors"]));
    return error;
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(deleteOne(data));
      return data;
    } else {
      const error = await response.json();
      dispatch(errorMsg(error["errors"]));
      return error;
    }
  } catch (error) {
    dispatch(errorMsg(error["errors"]));
    return error;
  }
};

export const createBook = (bookData) => async (dispatch) => {
  try {
    const response = await fetch("/api/books/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(addOne(data));
      return data;
    } else {
      const error = await response.json();
      dispatch(errorMsg(error["errors"]));
      return error;
    }
  } catch (error) {
    dispatch(errorMsg(error["errors"]));
    return error;
  }
};

const initialState = { allBooks: {}, singleBook: {}, errors: [] };

export default function booksReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_USER_BOOKS:
      newState = Object.assign({ ...state });
      newState.allBooks = action.payload;
      return newState;
    case GET_SINGLE_BOOK:
    case UPDATE_BOOK:
    case CREATE_BOOK:
      newState = Object.assign({ ...state });
      newState.singleBook = action.payload;
      return newState;
    case DELETE_BOOK:
      newState = Object.assign({ ...state });
      delete newState.allBooks[action.payload.id];
      return newState;
    case ERROR_MESSAGE:
      newState = Object.assign({ ...state });
      newState.errors = action.payload;
      return newState;
    default:
      return state;
  }
}
