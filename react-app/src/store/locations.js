const GET_ONE_LOCATION = "locations/getOne";
const UPDATE_LOCATION = "locations/updateOne";
const DELETE_LOCATION = "locations/deleteOne";

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

export const fetchLocation = (id) => async (dispatch) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const updateLocation = (id, locationData) => async (dispatch) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export const deleteLocation = (id) => async (dispatch) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const initialState = { allLocations: {}, singleLocation: {} };

export default function locationReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ONE_LOCATION:
    case UPDATE_LOCATION:
      newState = Object.assign({ ...state });
      newState.singleLocation = action.payload;
      return newState;
    case DELETE_LOCATION:
      newState = Object.assign({ ...state });
      delete newState.allLocations[action.payload.id];
      return newState;
    default:
      return state;
  }
}
