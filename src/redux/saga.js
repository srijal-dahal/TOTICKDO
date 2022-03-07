import { fork, all } from "redux-saga/effects";
import { GeneralSaga } from "_pages";

export default function* rootSaga() {
  yield all([fork(GeneralSaga)]);
}
