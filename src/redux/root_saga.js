import { fork, all } from "redux-saga/effects";
import { GeneralSaga, CompletedSaga } from "_pages";

export default function* rootSaga() {
  yield all([fork(GeneralSaga), fork(CompletedSaga)]);
}
