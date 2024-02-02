const GET_ONE_RACE = "races/getOne";
const UPDATE_RACE = "races/updateOne";
const DELETE_RACE = "races/deleteOne";
const CREATE_RACE = "races/addOne";
const ERROR_MESSAGE = "races/errorMsg";

const getOne = (data) => ({
  type: GET_ONE_RACE,
  payload: data,
});

const updateOne = (data) => ({
  type: UPDATE_RACE,
  payload: data,
});

const deleteOne = (data) => ({
  type: DELETE_RACE,
  payload: data,
});

const addOne = (data) => ({
  type: CREATE_RACE,
  payload: data,
});

const errorMsg = (data) => ({
  type: ERROR_MESSAGE,
  payload: data,
});

export const fetchRace = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/races/${id}`);

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

export const updateRace = (id, raceData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/races/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(raceData),
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

export const deleteRace = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/races/${id}`, {
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

export const createRace = (raceData) => async (dispatch) => {
  try {
    const response = await fetch("/api/races/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(raceData),
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

const initialState = { allRaces: {}, singleRace: {}, errors: [] };

export default function raceReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ONE_RACE:
    case UPDATE_RACE:
    case CREATE_RACE:
      newState = Object.assign({ ...state });
      newState.singleRace = action.payload;
      return newState;
    case DELETE_RACE:
      newState = Object.assign({ ...state });
      delete newState.allRaces[action.payload.id];
      return newState;
    case ERROR_MESSAGE:
      newState = Object.assign({ ...state });
      newState.errors = action.payload;
      return newState;
    default:
      return state;
  }
}
