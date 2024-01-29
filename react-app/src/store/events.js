const UPDATE_EVENT = "events/updateOne";

const updateOne = (data) => ({
  type: UPDATE_EVENT,
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
      return error;
    }
  } catch (error) {
    console.log(error);
  }
};

const initialState = { allEvents: {}, singleEvent: {} };

export default function eventsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case UPDATE_EVENT:
      newState = Object.assign({ ...state });
      newState.singleEvent = action.payload;
      return newState;
    default:
      return state;
  }
}