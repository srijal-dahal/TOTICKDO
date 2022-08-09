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
import { getLocalStorage } from "_utils/global_function";
// const user = getLocalStorage("user");

const completedTodosCount=(array)=> array?.filter(todo=>todo.status===true).length ?? 0;
const pendingTodosCount =(array)=> array?.filter((todo) => todo.status === false).length ?? 0;

let todos=[];

function* createTodo({payload}){
  try {
    yield put(setPostLoading(true));
    const todo={
      name:payload.todo,
      status:payload.status
    }
    todos.push(todo);

      yield put(setTodos(todos));
      yield put(
        setCompletedTodosCount(completedTodosCount(todos))
      );
      yield put(
        setIncompleteTodosCount(pendingTodosCount(todos))
      );
      setMessage("Todo added successfully");
      return yield put(setPostLoading(false));
  } catch (error) {
   console.log(error) 
  } 
}
// function* addTodo({ payload }) {
//   try {
//     yield put(setPostLoading(true));

//     const { todo, status } = payload;
//     const { userData } = getLocalStorage("user");

//     const uid = userData.uid;
//     const response = yield call(Api.post, `/todos/create/user=${uid}`, {
//       name: todo,
//       status: status,
//     });
//     if (
//       response.data.success === true &&
//       response.data.message.data.todos.length != 0
//     ) {
//       yield put(setTodos(response.data.message.data.todos));
//       yield put(
//         setCompletedTodosCount(response.data.message.data.completedTodosCount)
//       );
//       yield put(
//         setIncompleteTodosCount(response.data.message.data.pendingTodosCount)
//       );
//       setMessage("Todo added successfully");
//       return yield put(setPostLoading(false));
//     }
//     yield put(setError(response.data.message));
//     yield put(setPostLoading(false));
//   } catch (error) {
//     console.log(error.response);
//     yield put(setError(error));
//     return yield put(setPostLoading(false));
//   }
// }
function* updateTodo({ payload }) {
  try {
    const { todo} = payload;
    const { name, status } = todo;
    const toggledStatus = !status ?? false;
    const updateStatus = todos.map((todo) => {
      if (todo.name===name) {
        todo.status = toggledStatus;
      }
      return todo;
    });
    yield put(setTodos(updateStatus));
      yield put(
        setCompletedTodosCount(
        completedTodosCount(todos)
        )
      );
      yield put(
        setIncompleteTodosCount(
          pendingTodosCount(todos)
        )
      );
      yield put(setMessage("Todo updated successfully"));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
   yield put(setLoading(false));
  }
}
function* getTodos() {
  try {
    yield put(setLoading(true));
    const { userData } = getLocalStorage("user");

    const uid = userData.uid;
    const getTodos = yield call(Api.get, `todos/getTodos/user=${uid}`);
    if (
      getTodos.data.success === true &&
      getTodos.data.message.data.todos.length != 0
    ) {
      yield put(setTodos(getTodos.data.message.data.todos));
      yield put(
        setCompletedTodosCount(getTodos.data.message.data.completedTodosCount)
      );
      yield put(
        setIncompleteTodosCount(getTodos.data.message.data.pendingTodosCount)
      );
      setMessage("Todo added successfully");
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
    const { name } = payload;
      todos=todos.filter(todo=>todo.name!=name);

      yield put(setTodos(todos));
      yield put(
        setCompletedTodosCount(
          completedTodosCount(todos)
        )
      );
      yield put(
        setIncompleteTodosCount(pendingTodosCount(todos))
      );
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
