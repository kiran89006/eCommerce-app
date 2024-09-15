import axios from "axios";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST ";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};
export const fetchProductsSuccess = (login) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: login,
  };
};
export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchProducts = (id) => {
  return function (dispatch) {
    dispatch(fetchProductsRequest());
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        dispatch(fetchProductsSuccess(res.data));
        // setProductList(res.data);
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};
