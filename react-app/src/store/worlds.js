const GET_ONE_WORLD = "words/getOne";
const UPDATE_WORLD = "words/updateOne";

const getOne = (data) => ({
  type: GET_ONE_WORLD,
  payload: data,
});

const updateOne = (data) => ({
  type: UPDATE_WORLD,
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
      return error;
    }
  } catch (error) {
    console.log(error);
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
      return error;
    }
  } catch (error) {
    console.log(error);
  }
};

const initialState = { allWorlds: {}, singleWorld: {} };

export default function worldReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case GET_ONE_WORLD:
    case UPDATE_WORLD:
      newState = Object.assign({ ...state });
      newState.singleWorld = action.payload;
      return newState;
    default:
      return state;
  }
}
