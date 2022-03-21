import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "./auth_type";
import { setSignupLoading, setLoginLoading } from "./auth_action";
import Api from "../../utils/service";
function* signupUser({ payload }) {
  try {
    yield put(setSignupLoading(true));
    const { email, password, fullName } = payload;
    console.log(email, password, fullName);
    yield put(setSignupLoading(false));
  } catch (error) {
    console.log(error);
  }
}
function* loginUser({ payload }) {
  try {
    yield put(setLoginLoading(true));
    const { email, password } = payload;
    console.log(email, password);
    yield put(setLoginLoading(false));
  } catch (error) {
    console.log(error);
  }
}
export default function* watcher() {
  yield takeEvery(actionTypes.SIGNUP_USER, signupUser);
  yield takeEvery(actionTypes.LOGIN_USER, loginUser);
}
