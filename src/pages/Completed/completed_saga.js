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
import { getLocalStorage } from "_utils/global_function";
import {todos,pendingTodosCount,completedTodosCount}from "../General/general_saga.js"
  const completedTodos =arr=>arr?.filter((todo) =>todo.status===true);

function* getTodos() {
  try {
    yield put(setLoading(true));

      yield put(setCompletedTodos(completedTodos(todos)));
      yield put(
        setCompletedTodosCount(completedTodosCount(todos))
      );
      yield put(
        setIncompleteTodosCount(pendingTodosCount(todos))
      );
      setMessage("Todo added successfully");
    return yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
    return yield put(setLoading(false));
  }
}
function* deleteTodo({ payload }) {
  try {
    const { name } = payload;
      todos=todos.filter(todo=>todo.name!=name);
      yield put(setCompletedTodos(todos));
      yield put(
        setCompletedTodosCount(
          completedTodosCount(todos)
        )
      );
      yield put(
        setIncompleteTodosCount(pendingTodosCount(todos))
      );
    yield put(setMessage("Todo deleted successfully"));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
    return yield put(setLoading(false));
  }
}
export default function* watcher() {
  yield takeEvery(actionTypes.GET_TODOS, getTodos);
  yield takeEvery(actionTypes.DELETE_TODO, deleteTodo);
}
