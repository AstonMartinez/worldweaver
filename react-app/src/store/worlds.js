const GET_ONE_WORLD = "worlds/getOne";
const UPDATE_WORLD = "worlds/updateOne";
const DELETE_WORLD = "worlds/deleteOne";
const CREATE_WORLD = "worlds/addOne";
const ERROR_MESSAGE = "worlds/errorMsg";

const getOne = (data) => ({
  type: GET_ONE_WORLD,
  payload: data,
});

const updateOne = (data) => ({
  type: UPDATE_WORLD,
  payload: data,
});

const deleteOne = (data) => ({
  type: DELETE_WORLD,
  payload: data,
});

const addOne = (data) => ({
  type: CREATE_WORLD,
  payload: data,
});

const errorMsg = (data) => ({
  type: ERROR_MESSAGE,
  payload: data,
});

export const fetchWorld = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/worlds/${id}`);

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

export const updateWorld = (id, worldData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/worlds/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(worldData),
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

export const deleteWorld = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/worlds/${id}`, {
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

export const createWorld = (worldData) => async (dispatch) => {
  try {
    const response = await fetch("/api/worlds/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(worldData),
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

const initialState = { allWorlds: {}, singleWorld: {}, errors: [] };

export default function worldReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ONE_WORLD:
    case UPDATE_WORLD:
    case CREATE_WORLD:
      newState = Object.assign({ ...state });
      newState.singleWorld = action.payload;
      return newState;
    case DELETE_WORLD:
      newState = Object.assign({ ...state });
      delete newState.allWorlds[action.payload.id];
      return newState;
    case ERROR_MESSAGE:
      newState = Object.assign({ ...state });
      newState.errors = action.payload;
      return newState;
    default:
      return state;
  }
}
