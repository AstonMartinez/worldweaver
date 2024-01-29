const GET_ONE_CHARACTER = "characters/getOne";
const UPDATE_CHARACTER = "characters/updateOne";
const DELETE_CHARACTER = "characters/deleteOne";

const getOne = (data) => ({
  type: GET_ONE_CHARACTER,
  payload: data,
});

const updateOne = (data) => ({
  type: UPDATE_CHARACTER,
  payload: data,
});

const deleteOne = (data) => ({
  type: DELETE_CHARACTER,
  payload: data,
});

export const fetchOneCharacter = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/characters/${id}`);

    if (response.ok) {
      const data = await response.json();
      dispatch(getOne(data));
      return data;
    } else {
      const error = await response.json();
      return error;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateCharacter = (id, charData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/characters/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(charData),
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

export const deleteCharacter = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/characters/${id}`, {
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
      return error;
    }
  } catch (error) {
    console.log(error);
  }
};

const initialState = { allCharacters: {}, singleCharacter: {} };

export default function characterReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ONE_CHARACTER:
    case UPDATE_CHARACTER:
      newState = Object.assign({ ...state });
      newState.singleCharacter = action.payload;
      return newState;
    case DELETE_CHARACTER:
      newState = Object.assign({ ...state });
      delete newState.allCharacters[action.payload.id];
      return newState;
    default:
      return state;
  }
}
