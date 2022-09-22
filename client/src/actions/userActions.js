//actions are where we actually make request to backend
import axios from "axios";
import { REFRESH_USER_DATA, RESET_USER_DATA, RESET_STOCK_DATA } from "./types";
import { returnErrors } from "./errorActions";
import { tokenConfig } from "./authActions";

export const refreshUserData = (user) => (dispatch) => {
  // User loading. dispatch this action, Pass this in before anything to change the state of application to loading
  axios
    .post("/api/user/data", user)
    .then((res) =>
      dispatch({
        type: REFRESH_USER_DATA,
        payload: res.data, //
      })
    )
    //call error action to get errors if there are some. returnErrors takes in parameters, then returns object with errors
    .catch((err) => {
      dispatch(returnErrors(err));
    });

  return {
    type: REFRESH_USER_DATA,
    payload: user,
  };
};

export const resetUserData = (user) => (dispatch, getState) => {
  console.log("user", user);
  axios
    .post("/api/user/reset", user, tokenConfig(getState))
    .then((res) => {
      console.log("Reset user data: ", res.data);
      dispatch({
        type: RESET_USER_DATA,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err));
    });
  return {
    type: RESET_USER_DATA,
    payload: user,
  };
};

export const resetStockData = (user) => (dispatch, getState) => {
  axios
    .post("/api/user/reset", user, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: RESET_STOCK_DATA,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err));
    });
  return {
    type: RESET_STOCK_DATA,
    payload: user,
  };
};
