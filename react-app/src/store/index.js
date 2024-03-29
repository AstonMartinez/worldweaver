import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import booksReducer from "./books";
import worldReducer from "./worlds";
import characterReducer from "./characters";
import eventsReducer from "./events";
import factionReducer from "./factions";
import chapterReducer from "./chapters";
import locationReducer from "./locations";
import raceReducer from "./races";
import magicReducer from "./magic";
import elementReducer from "./elements";

const rootReducer = combineReducers({
  session,
  books: booksReducer,
  worlds: worldReducer,
  characters: characterReducer,
  events: eventsReducer,
  factions: factionReducer,
  chapters: chapterReducer,
  locations: locationReducer,
  races: raceReducer,
  magic: magicReducer,
  elements: elementReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
