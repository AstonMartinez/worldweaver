const GET_ONE_ELEMENT = "elements/getOne";
const UPDATE_ELEMENT = "elements/updateOne";
const DELETE_ELEMENT = "elements/deleteOne";
const CREATE_ELEMENT = "elements/addOne";
const ERROR_MESSAGE = "elements/errorMsg";

const getOne = (data) => ({
  type: GET_ONE_ELEMENT,
  payload: data,
});

const updateOne = (data) => ({
  type: UPDATE_ELEMENT,
  payload: data,
});

const deleteOne = (data) => ({
  type: DELETE_ELEMENT,
  payload: data,
});

const addOne = (data) => ({
  type: CREATE_ELEMENT,
  payload: data,
});

const errorMsg = (data) => ({
  type: ERROR_MESSAGE,
  payload: data,
});

export const fetchElement = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/elements/${id}`);

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
  }
};

export const updateElement = (id, elemData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/elements/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(elemData),
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
  }
};

export const deleteElement = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/elements/${id}`, {
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
  }
};

export const createElement = (elemData) => async (dispatch) => {
  try {
    const response = await fetch("/api/elements/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(elemData),
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

const initialState = { allElements: {}, singleElement: {}, errors: [] };

export default function elementReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ONE_ELEMENT:
    case UPDATE_ELEMENT:
    case CREATE_ELEMENT:
      newState = Object.assign({ ...state });
      newState.singleElement = action.payload;
      return newState;
    case DELETE_ELEMENT:
      newState = Object.assign({ ...state });
      delete newState.allElements[action.payload.id];
      return newState;
    case ERROR_MESSAGE:
      newState = Object.assign({ ...state });
      newState.errors = action.payload;
      return newState;
    default:
      return state;
  }
}
