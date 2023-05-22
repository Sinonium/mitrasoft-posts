import { combineReducers } from "redux";
import { myReducer } from "./myReducer";

const rootReducer = combineReducers({
   myReducer: myReducer
 });

export default rootReducer