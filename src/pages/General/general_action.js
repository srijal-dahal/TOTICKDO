import actionTypes from "./general_type";

export const setLoading = (payload) => {
  return {
    type: actionTypes.TODO_GENERAL_LOADING,
    payload: payload,
  };
};

export const setError = (payload) => {
  return {
    type: actionTypes.TODO_GENERAL_ERROR,
    payload: payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: actionTypes.ADD_GENERAL_TODO,
    payload: payload,
  };
};
export const setTodos = (payload) => {
  return {
    type: actionTypes.SET_GENERAL_TODOS,
    payload: payload,
  };
};
export const getTodos = () => {
  return {
    type: actionTypes.GET_GENERAL_TODOS,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: actionTypes.DELETE_GENERAL_TODO,
    payload: payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: actionTypes.EDIT_GENERAL_TODO,
    payload: payload,
  };
};

export const setMessage = (payload) => {
  return {
    type: actionTypes.SET_GENERAL_MESSAGE,
    payload: payload,
  };
};
export const setIncompleteTodosCount = (payload) => {
  return {
    type: actionTypes.SET_INCOMPLETE_TODOS_COUNT,
    payload: payload,
  };
};
export const setCompletedTodosCount = (payload) => {
  return {
    type: actionTypes.SET_COMPLETED_TODOS_COUNT,
    payload: payload,
  };
};
