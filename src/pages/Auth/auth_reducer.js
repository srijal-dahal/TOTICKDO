import actionTypes from "./auth_type";
const initState = {
  signupError: null,
  signupLoading: false,
  loginError: null,
  loginLoading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_LOADING:
      return {
        ...state,
        signupLoading: action.payload,
      };
    case actionTypes.SIGNUP_ERROR:
      return {
        ...state,
        signupError: action.payload,
      };
    case actionTypes.LOGIN_LOADING:
      return {
        ...state,
        loginLoading: action.payload,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };
    default:
      return { ...state };
  }
};
