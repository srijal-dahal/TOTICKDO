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

    case actionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case actionTypes.EDIT_TODO:
     
      const updateTodos = state.todos.filter(
        (todo) => todo.id === action.payload.id
      );
      if (updateTodos.length > 0) {
        updateTodos[0].status = !updateTodos[0].status;
      }
      return {
        ...state,
        todos: [...state.todos],
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
