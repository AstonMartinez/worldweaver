const GET_ONE_LOCATION = "locations/getOne";
const UPDATE_LOCATION = "locations/updateOne";
const DELETE_LOCATION = "locations/deleteOne";
const CREATE_LOCATION = "locations/addOne";
const ERROR_MESSAGE = "locations/errorMsg";

const getOne = (data) => ({
  type: GET_ONE_LOCATION,
  payload: data,
});

const updateOne = (data) => ({
  type: UPDATE_LOCATION,
  payload: data,
});

const deleteOne = (data) => ({
  type: DELETE_LOCATION,
  payload: data,
});

const addOne = (data) => ({
  type: CREATE_LOCATION,
  payload: data,
});

const errorMsg = (data) => ({
  type: ERROR_MESSAGE,
  payload: data,
});

export const fetchLocation = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/locations/${id}`);

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

export const updateLocation = (id, locationData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/locations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationData),
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

export const deleteLocation = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/locations/${id}`, {
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

export const createLocation = (locData) => async (dispatch) => {
  try {
    const response = await fetch("/api/locations/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locData),
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

const initialState = { allLocations: {}, singleLocation: {}, errors: [] };

export default function locationReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ONE_LOCATION:
    case UPDATE_LOCATION:
    case CREATE_LOCATION:
      newState = Object.assign({ ...state });
      newState.singleLocation = action.payload;
      return newState;
    case DELETE_LOCATION:
      newState = Object.assign({ ...state });
      delete newState.allLocations[action.payload.id];
      return newState;
    case ERROR_MESSAGE:
      newState = Object.assign({ ...state });
      newState.errors = action.payload;
      return newState;
    default:
      return state;
  }
}
