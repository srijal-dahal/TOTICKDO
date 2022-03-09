import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "./type";
import { addTodoSuccess, setLoading, setError, setMessage } from "./action";
import Api from "../../utils/service";
function* addTodo({ payload }) {
  try {
    yield put(setLoading(true));

    const { todo, status } = payload;
    const response = yield call(
      Api.post,
      "/todos/create/user=6210bae75f3a886b654a9cc1",
      {
        name: todo,
        status: status,
      }
    );
    if (response.data.success === true) {
      const getTodos = yield call(
        Api.get,
        "todos/getTodos/user=6210bae75f3a886b654a9cc1"
      );
      if (getTodos.data.success === true) {
        yield put(addTodoSuccess(getTodos.data.message.todos));
        setMessage("Todo added successfully");
        return yield put(setLoading(false));
      }
    } else {
      setError(response.data.message);
      yield put(setLoading(false));

      return;
    }
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
