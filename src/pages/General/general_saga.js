import crypto from "crypto";
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

export const completedTodosCount = (array) =>
  array?.filter((todo) => todo.status === true).length ?? 0;
export const pendingTodosCount = (array) =>
  array?.filter((todo) => todo.status === false).length ?? 0;

export let todos = [];

function* createTodo({ payload }) {
  try {
    yield put(setPostLoading(true));
    const id = crypto.randomBytes(10).toString("hex");
    const todo = {
      id: id,
      name: payload.todo,
      status: payload.status,
    };
    todos = [todo, ...todos];

    yield put(setTodos(todos));
    yield put(setCompletedTodosCount(completedTodosCount(todos)));
    yield put(setIncompleteTodosCount(pendingTodosCount(todos)));
    setMessage("Todo added successfully");
    return yield put(setPostLoading(false));
  } catch (error) {
    console.log(error);
  }
}

function* updateTodo({ payload }) {
  try {
    const { todo } = payload;
    const { id } = todo;
    const updateStatus = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    yield put(setTodos(updateStatus));
    yield put(setCompletedTodosCount(completedTodosCount(todos)));
    yield put(setIncompleteTodosCount(pendingTodosCount(todos)));
    yield put(setMessage("Todo updated successfully"));
  } catch (error) {
    yield put(setError(error));
    yield put(setLoading(false));
  }
}
function* getTodos() {
  try {
    yield put(setLoading(true));
    yield put(setTodos(todos));
    yield put(setCompletedTodosCount(completedTodosCount(todos)));
    yield put(setIncompleteTodosCount(pendingTodosCount(todos)));
    yield put(setMessage("Todo added successfully"));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
    return yield put(setLoading(false));
  }
}
function* deleteSingleTodo({ payload }) {
  try {
    const { id } = payload;
    todos = todos.filter((todo) => todo.id != id);

    yield put(setTodos(todos));
    yield put(setCompletedTodosCount(completedTodosCount(todos)));
    yield put(setIncompleteTodosCount(pendingTodosCount(todos)));
    setMessage("Todo deleted successfully");
  } catch (error) {
    console.log(error);
    yield put(setError(error));
    return yield put(setLoading(false));
  }
}
export default function* watcher() {
  yield takeEvery(actionTypes.ADD_GENERAL_TODO, createTodo);
  yield takeEvery(actionTypes.EDIT_GENERAL_TODO, updateTodo);
  yield takeEvery(actionTypes.GET_GENERAL_TODOS, getTodos);
  yield takeEvery(actionTypes.DELETE_GENERAL_TODO, deleteSingleTodo);
}
