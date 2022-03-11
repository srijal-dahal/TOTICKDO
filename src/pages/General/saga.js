import { call, put, takeEvery } from "redux-saga/effects";
import actionTypes from "./type";
import { setLoading, setError, setMessage, setTodos } from "./action";
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
      if (
        getTodos.data.success === true &&
        getTodos.data.message.todos.length != 0
      ) {
        yield put(setTodos(getTodos.data.message.todos));
        setMessage("Todo added successfully");
        return yield put(setLoading(false));
      }
    }
    yield put(setError(response.data.message));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
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
      yield put(setTodos(updatedTodos.data.message.todos));
      yield put(setMessage("Todo updated successfully"));
      return;
    }
  } catch (error) {
    yield put(setError(error));
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
      if (getTodos.data.message.todos.length === 0) {
        return yield put(setLoading(false));
      }
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
    console.log(error)
    yield put(setError(error));
  }
}
export default function* watcher() {
  yield takeEvery(actionTypes.ADD_TODO, addTodo);
  yield takeEvery(actionTypes.EDIT_TODO, updateTodo);
  yield takeEvery(actionTypes.GET_TODOS, getTodos);
  yield takeEvery(actionTypes.DELETE_TODO, deleteTodo);
}
