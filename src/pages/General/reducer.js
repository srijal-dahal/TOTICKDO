import actionTypes from "./type";
const initState = {
  isLoading: false,
  isError: false,
  tods: [],
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

    case actionTypes.GET_TODO_SUCCESS:
      return {
        ...state,
        tods: action.payload,
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
