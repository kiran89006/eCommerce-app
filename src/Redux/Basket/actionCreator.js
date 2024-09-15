import axios from "axios";
import {
  FETCH_BASKETPRODUCTS_FAILURE,
  FETCH_BASKETPRODUCTS_REQUEST,
  FETCH_BASKETPRODUCTS_SUCCESS,
} from "./actions";

export const basketProductsRequestFn = () => {
  return {
    type: FETCH_BASKETPRODUCTS_REQUEST,
  };
};
export const basketProductsSuccessFn = (products) => {
  return {
    type: FETCH_BASKETPRODUCTS_SUCCESS,
    payload: products,
  };
};
export const basketProductsFailureFn = (error) => {
  return {
    type: FETCH_BASKETPRODUCTS_FAILURE,
    payload: error,
  };
};


// thunk creator function for API calls from the redux

const fetchBasketProductsAPI = () => {
  return function (dispatch) {
    dispatch(basketProductsRequestFn());
    axios("https://dummyjson.com/carts/user/11")
      .then((res) => {
        dispatch(basketProductsSuccessFn(res.data));
      })
      .catch((error) => {
        dispatch(basketProductsFailureFn(error.message));
        console.log(error.message);
      });
  };
};
export default fetchBasketProductsAPI;
