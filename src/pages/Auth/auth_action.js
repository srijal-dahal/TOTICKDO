import actionTypes from "./auth_type";

export const signupUser = (payload) => {
  return {
    type: actionTypes.SIGNUP_USER,
    payload: payload,
  };
};
export const setSignupLoading = (payload) => {
  return {
    type: actionTypes.SIGNUP_LOADING,
    payload: payload,
  };
};
export const setSignupError = (payload) => {
  return {
    type: actionTypes.SIGNUP_ERROR,
    payload: payload,
  };
};
export const loginUser = (payload) => {
  return {
    type: actionTypes.LOGIN_USER,
    payload: payload,
  };
};
export const setLoginLoading = (payload) => {
  return {
    type: actionTypes.LOGIN_LOADING,
    payload: payload,
  };
};
export const setLoginError = (payload) => {
  return {
    type: actionTypes.LOGIN_ERROR,
    payload: payload,
  };
};
