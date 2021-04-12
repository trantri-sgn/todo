import { combineReducers } from "redux";
import MovieReducer from "./movie";

const RootReducers = combineReducers({
  movie: MovieReducer,
});

export default RootReducers;
