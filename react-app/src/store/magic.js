const GET_ONE_MAGIC = "magic/getOne";
const UPDATE_MAGIC = "magic/updateOne";
const DELETE_MAGIC = "magic/deleteOne";
const CREATE_MAGIC = "magic/addOne";
const ERROR_MESSAGE = "magic/errorMsg";

const getOne = (data) => ({
  type: GET_ONE_MAGIC,
  payload: data,
});

const updateOne = (data) => ({
  type: UPDATE_MAGIC,
  payload: data,
});

const deleteOne = (data) => ({
  type: DELETE_MAGIC,
  payload: data,
});

const addOne = (data) => ({
  type: CREATE_MAGIC,
  payload: data,
});

const errorMsg = (data) => ({
  type: ERROR_MESSAGE,
  payload: data,
});

export const fetchMagic = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/magic/${id}`);

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

export const updateMagic = (id, magData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/magic/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(magData),
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

export const deleteMagic = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/magic/${id}`, {
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

export const createMagic = (magData) => async (dispatch) => {
  try {
    const response = await fetch("/api/magic/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(magData),
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

const initialState = { allMagic: {}, singleMagic: {}, errors: [] };

export default function magicReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ONE_MAGIC:
    case UPDATE_MAGIC:
    case CREATE_MAGIC:
      newState = Object.assign({ ...state });
      newState.singleMagic = action.payload;
      return newState;
    case DELETE_MAGIC:
      newState = Object.assign({ ...state });
      delete newState.allMagic[action.payload.id];
      return newState;
    case ERROR_MESSAGE:
      newState = Object.assign({ ...state });
      newState.errors = action.payload;
      return newState;
    default:
      return state;
  }
}
