import actionTypes from "./type";

const initState = {
  isLoading: false,
  error: "",
  todos: [],
  message: "",
};
export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TODO_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actionTypes.TODO_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    case actionTypes.SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };

    case actionTypes.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
};
