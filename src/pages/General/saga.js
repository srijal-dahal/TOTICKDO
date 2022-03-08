import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "./type";
import { addTodoSuccess, setLoading, setError, setMessage } from "./action";
function* addTodo({ payload }) {
  try {
    yield put(setLoading(true));
    let todos = {
      id: Math.floor(Math.random() * 1000),
      ...payload,
    };

    yield put(addTodoSuccess(todos));
    setMessage("Todo added successfully");
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}
function* updateTodo({ payload }) {
  try {
    yield put(setLoading(true));
    console.log(payload);
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
  }
}
export default function* watcher() {
  yield takeEvery(actionTypes.ADD_TODO, addTodo);
  yield takeEvery(actionTypes.EDIT_TODO, updateTodo);
}
