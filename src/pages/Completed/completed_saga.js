import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "./completed_type";
import {
  setLoading,
  setError,
  setMessage,
  setCompletedTodos,
  setCompletedTodosCount,
  setIncompleteTodosCount,
} from "./completed_action";
import Api from "../../utils/service";

function* getTodos() {
  try {
    yield put(setLoading(true));
    const getTodos = yield call(
      Api.get,
      "todos/completed-todos/user=6210bae75f3a886b654a9cc1"
    );
    if (getTodos.data.success === true) {
      if (getTodos.data.message.data.length === 0) {
        return yield put(setLoading(false));
      }
      yield put(setCompletedTodos(getTodos.data.message.data.completedTodos));
      yield put(
        setCompletedTodosCount(getTodos.data.message.data.completedTodosCount)
      );
      yield put(
        setIncompleteTodosCount(getTodos.data.message.data.pendingTodosCount)
      );
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
    const todos = yield call(Api.delete, `/todos/delete/${_id}`);
    if (todos.data.success === true) {
      const filteredTodosComplete = todos.data.message.data.todos.filter(
        (todo) => todo.status === true
      );
      const filteredTodosInComplete = todos.data.message.data.todos.filter(
        (todo) => todo.status === false
      );

      yield put(setCompletedTodos(filteredTodosComplete));
      yield put(setCompletedTodosCount(filteredTodosComplete.length));
      yield put(setIncompleteTodosCount(filteredTodosInComplete.length));
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
