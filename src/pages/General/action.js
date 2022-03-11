import actionTypes from "./type";

export const setLoading = (payload) => {
  return {
    type: actionTypes.TODO_LOADING,
    payload: payload,
  };
};

export const setError = (payload) => {
  return {
    type: actionTypes.TODO_ERROR,
    payload: payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: payload,
  };
};
export const setTodos = (payload) => {
  return {
    type: actionTypes.SET_TODOS,
    payload: payload,
  };
};
export const getTodos = () => {
  return {
    type: actionTypes.GET_TODOS,
  };
};
export const getTodosSuccess = (payload) => {
  return {
    type: actionTypes.GET_TODOS_SUCCESS,
    payload: payload,
  };
};
export const addTodoSuccess = (payload) => {
  return {
    type: actionTypes.ADD_TODO_SUCCESS,
    payload: payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: actionTypes.EDIT_TODO,
    payload: payload,
  };
};

export const setMessage = (payload) => {
  return {
    type: actionTypes.SET_MESSAGE,
    payload: payload,
  };
};
export const setIncompleteTodos = (payload) => {
  return {
    type: actionTypes.SET_INCOMPLETE,
    payload: payload,
  };
};
export const setCompleteTodos = (payload) => {
  return {
    type: actionTypes.SET_INCOMPLETE,
    payload: payload,
  };
};
