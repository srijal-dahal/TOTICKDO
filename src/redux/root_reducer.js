import { combineReducers } from "redux";
import { GeneralReducer,CompletedReducer } from "_pages";
export default combineReducers({
  general: GeneralReducer,
  completed: CompletedReducer
});
