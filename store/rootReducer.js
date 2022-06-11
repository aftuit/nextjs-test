import { statesReducer } from "./posts/reducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    states: statesReducer
})