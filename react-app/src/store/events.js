const UPDATE_EVENT = "events/updateOne";
const DELETE_EVENT = "events/deleteOne";
const CREATE_EVENT = "events/addOne";
const ERROR_MESSAGE = "events/errorMsg";

const updateOne = (data) => ({
  type: UPDATE_EVENT,
  payload: data,
});

const deleteOne = (data) => ({
  type: DELETE_EVENT,
  payload: data,
});

const addOne = (data) => ({
  type: CREATE_EVENT,
  payload: data,
});

const errorMsg = (data) => ({
  type: ERROR_MESSAGE,
  payload: data,
});

export const updateEventDetails = (id, eventData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
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

export const deleteEvent = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/events/${id}`, {
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

export const createEvent = (eventData) => async (dispatch) => {
  try {
    const response = await fetch("/api/events/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
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

const initialState = { allEvents: {}, singleEvent: {}, errors: [] };

export default function eventsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case UPDATE_EVENT:
    case CREATE_EVENT:
      newState = Object.assign({ ...state });
      newState.singleEvent = action.payload;
      return newState;
    case DELETE_EVENT:
      newState = Object.assign({ ...state });
      delete newState.allEvents[action.payload.id];
      return newState;
    case ERROR_MESSAGE:
      newState = Object.assign({ ...state });
      newState.errors = action.payload;
      return newState;
    default:
      return state;
  }
}
