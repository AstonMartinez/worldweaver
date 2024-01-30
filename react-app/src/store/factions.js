const UPDATE_FACTION = "factions/updateOne";
const DELETE_FACTION = "factions/deleteOne";
const CREATE_FACTION = "factions/addOne";
const ERROR_MESSAGE = "factions/errorMsg";

const updateOne = (data) => ({
  type: UPDATE_FACTION,
  payload: data,
});

const deleteOne = (data) => ({
  type: DELETE_FACTION,
  payload: data,
});

const addOne = (data) => ({
  type: CREATE_FACTION,
  payload: data,
});

const errorMsg = (data) => ({
  type: ERROR_MESSAGE,
  payload: data,
});

export const updateFactionDetails = (id, factionData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/factions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(factionData),
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

export const deleteFaction = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/factions/${id}`, {
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

export const createFaction = (factionData) => async (dispatch) => {
  try {
    const response = await fetch("/api/factions/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(factionData),
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

const initialState = { allFactions: {}, singleFaction: {}, errors: [] };

export default function factionReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case UPDATE_FACTION:
    case CREATE_FACTION:
      newState = Object.assign({ ...state });
      newState.singleFaction = action.payload;
      return newState;
    case DELETE_FACTION:
      newState = Object.assign({ ...state });
      delete newState.allFactions[action.payload.id];
      return newState;
    case ERROR_MESSAGE:
      newState = Object.assign({ ...state });
      newState.errors = action.payload;
      return newState;
    default:
      return state;
  }
}
