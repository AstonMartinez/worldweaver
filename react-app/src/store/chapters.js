const GET_CHAPTER = "chapters/getOne";
const GET_BY_BOOK = "chapters/byBook";
const UPDATE_CHAPTER = "chapters/updateOne";
const DELETE_CHAPTER = "chapters/deleteOne";
const CREATE_CHAPTER = "chapters/addOne";
const ERROR_MESSAGE = "chapters/errorMsg";

const getOne = (data) => ({
  type: GET_CHAPTER,
  payload: data,
});

const byBook = (data) => ({
  type: GET_BY_BOOK,
  payload: data,
});

const updateOne = (data) => ({
  type: UPDATE_CHAPTER,
  payload: data,
});

const deleteOne = (data) => ({
  type: DELETE_CHAPTER,
  payload: data,
});

const addOne = (data) => ({
  type: CREATE_CHAPTER,
  payload: data,
});

const errorMsg = (data) => ({
  type: ERROR_MESSAGE,
  payload: data,
});

export const fetchChapter = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/chapters/${id}`);

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

export const fetchChapterByBook = (bookId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/chapters/books/${bookId}`);

    if (response.ok) {
      const data = await response.json();
      dispatch(byBook(data));
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

export const updateChapter = (id, chapterData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/chapters/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chapterData),
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

export const deleteChapter = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/chapters/${id}`, {
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

export const createChapter = (chapData) => async (dispatch) => {
  try {
    const response = await fetch("/api/chapters/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chapData),
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
  }
};

const initialState = { allChapters: {}, singleChapter: {}, errors: [] };

export default function chapterReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_CHAPTER:
    case UPDATE_CHAPTER:
    case CREATE_CHAPTER:
      newState = Object.assign({ ...state });
      newState.singleChapter = action.payload;
      return newState;
    case GET_BY_BOOK:
      newState = Object.assign({ ...state });
      newState.allChapters = action.payload;
      return newState;
    case DELETE_CHAPTER:
      newState = Object.assign({ ...state });
      delete newState.allChapters[action.payload.id];
      return newState;
    case ERROR_MESSAGE:
      newState = Object.assign({ ...state });
      newState.errors = action.payload;
      return newState;
    default:
      return state;
  }
}
