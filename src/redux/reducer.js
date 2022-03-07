import { combineReducers } from "redux";
import { GeneralReducer } from "_pages";
export default combineReducers({
  general: GeneralReducer,
});
