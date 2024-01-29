const UPDATE_FACTION = "factions/updateOne";

const updateOne = (data) => ({
  type: UPDATE_FACTION,
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
      return error;
    }
  } catch (error) {
    console.log(error);
  }
};

const initialState = { allFactions: {}, singleFaction: {} };

export default function factionReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case UPDATE_FACTION:
      newState = Object.assign({ ...state });
      newState.singleFaction = action.payload;
      return newState;
    default:
      return state;
  }
}
