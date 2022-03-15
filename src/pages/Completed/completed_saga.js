import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "./completed_type";
import { setLoading, setError, setMessage, setTodos } from "./completed_action";
import Api from "../../utils/service";

function* getTodos() {
  try {
    yield put(setLoading(true));
    const getTodos = yield call(
      Api.get,
      "todos/completed-todos/user=6210bae75f3a886b654a9cc1"
    );
      console.log(getTodos);
    if (getTodos.data.success === true) {
      if (getTodos.data.message.todos.length === 0) {
        return yield put(setLoading(false));
      }
        console.log(getTodos.data.message.todos);
      yield put(setTodos(getTodos.data.message.todos));
      setMessage("Todo added successfully");
      return yield put(setLoading(false));
    }
    return yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}
function* deleteTodo({ payload }) {
  try {
    const { _id } = payload;
    const deletedTodo = yield call(Api.delete, `/todos/delete/${_id}`);
    if (deletedTodo.data.success === true) {
      yield put(setTodos(deletedTodo.data.message.todos));
      setMessage("Todo deleted successfully");
      return;
    }
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}
export default function* watcher() {
  yield takeEvery(actionTypes.GET_TODOS, getTodos);
  yield takeEvery(actionTypes.DELETE_TODO, deleteTodo);
}
