import { combineReducers } from "redux";
import { GeneralReducer, CompletedReducer, AuthReducer } from "_pages";
export default combineReducers({
  general: GeneralReducer,
  completed: CompletedReducer,
  auth: AuthReducer,
});
