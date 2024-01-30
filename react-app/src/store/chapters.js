const GET_CHAPTER = "chapters/getOne";
const UPDATE_CHAPTER = "chapters/updateOne";
const DELETE_CHAPTER = "chapters/deleteOne";

const getOne = (data) => ({
  type: GET_CHAPTER,
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

export const fetchChapter = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/chapters/${id}`);

    if (response.ok) {
      const data = await response.json();
      dispatch(getOne(data));
      return data;
    } else {
      const error = await response.json();
      return error;
    }
  } catch (error) {
    console.log(error);
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
      return error;
    }
  } catch (error) {
    console.log(error);
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
      return error;
    }
  } catch (error) {
    console.log(error);
  }
};

const initialState = { allChapters: {}, singleChapter: {} };

export default function chapterReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_CHAPTER:
    case UPDATE_CHAPTER:
      newState = Object.assign({ ...state });
      newState.singleChapter = action.payload;
      return newState;
    case DELETE_CHAPTER:
      newState = Object.assign({ ...state });
      delete newState.allChapters[action.payload.id];
      return newState;
    default:
      return state;
  }
}
