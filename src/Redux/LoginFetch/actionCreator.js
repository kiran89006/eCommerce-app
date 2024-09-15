import axios from "axios";
import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from "./actions";

export const fetchLoginRequest = () => {
  return {
    type: FETCH_LOGIN_REQUEST,
  };
};
export const fetchLoginSuccess = (login) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: login,
  };
};
export const fetchLoginFailure = (error) => {
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: error,
  };
};

const fetchData = () => {
  return function (dispatch) {
    dispatch(fetchLoginRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchLoginSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchLoginFailure(error.message));
      });
  };
};
export default fetchData;
