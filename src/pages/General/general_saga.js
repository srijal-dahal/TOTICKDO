import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "./general_type";
import {
  setLoading,
  setError,
  setMessage,
  setTodos,
  setPostLoading,
  setIncompleteTodosCount,
  setCompletedTodosCount,
} from "./general_action";
import Api from "../../utils/service";
function* addTodo({ payload }) {
  try {
    yield put(setPostLoading(true));

    const { todo, status } = payload;
    const response = yield call(
      Api.post,
      "/todos/create/user=6210bae75f3a886b654a9cc1",
      {
        name: todo,
        status: status,
      }
    );
    if (
      response.data.success === true &&
      response.data.message.data.todos.length != 0
    ) {
      yield put(setTodos(response.data.message.data.todos));
      yield put(
        setCompletedTodosCount(response.data.message.data.completedTodosCount)
      );
      yield put(
        setIncompleteTodosCount(response.data.message.data.pendingTodosCount)
      );
      setMessage("Todo added successfully");
      return yield put(setPostLoading(false));
    }
    yield put(setError(response.data.message));
    yield put(setPostLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
    return yield put(setPostLoading(false));
  }
}
function* updateTodo({ payload }) {
  try {
    const { _id, status } = payload;
    const toggledStatus = !status ?? false;
    const updatedTodos = yield call(Api.put, `/todos/update/${_id}`, {
      status: toggledStatus,
    });
    if (updatedTodos.data.success === true) {
      yield put(setTodos(updatedTodos.data.message.data.todos));
      yield put(
        setCompletedTodosCount(
          updatedTodos.data.message.data.completedTodosCount
        )
      );
      yield put(
        setIncompleteTodosCount(
          updatedTodos.data.message.data.pendingTodosCount
        )
      );
      yield put(setMessage("Todo updated successfully"));
      return;
    }
  } catch (error) {
    console.log(error);
    yield put(setError(error));
    return yield put(setLoading(false));
  }
}
function* getTodos() {
  try {
    yield put(setLoading(true));
    const getTodos = yield call(
      Api.get,
      "todos/getTodos/user=6210bae75f3a886b654a9cc1"
    );
    if (getTodos.data.success === true) {
      if (getTodos.data.message.data.todos.length === 0) {
        return yield put(setLoading(false));
      }
      yield put(setTodos(getTodos.data.message.data.todos));
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
    return yield put(setLoading(false));
  }
}
function* deleteSingleTodo({ payload }) {
  try {
    const { _id } = payload;
    const deletedTodo = yield call(Api.delete, `/todos/delete/${_id}`);
    if (deletedTodo.data.success === true) {
      yield put(setTodos(deletedTodo.data.message.data.todos));
      yield put(
        setCompletedTodosCount(
          deletedTodo.data.message.data.completedTodosCount
        )
      );
      yield put(
        setIncompleteTodosCount(deletedTodo.data.message.data.pendingTodosCount)
      );
      setMessage("Todo deleted successfully");
      return;
    }
  } catch (error) {
    console.log(error);
    yield put(setError(error));
    return yield put(setLoading(false));
  }
}
export default function* watcher() {
  yield takeEvery(actionTypes.ADD_GENERAL_TODO, addTodo);
  yield takeEvery(actionTypes.EDIT_GENERAL_TODO, updateTodo);
  yield takeEvery(actionTypes.GET_GENERAL_TODOS, getTodos);
  yield takeEvery(actionTypes.DELETE_GENERAL_TODO, deleteSingleTodo);
}
