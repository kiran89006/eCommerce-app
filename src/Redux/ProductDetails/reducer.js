import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./actionCreaters";

const initialstate = {
  loading: false,
  productDetails: {},
  error: "",
};

export const productsDetailsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        productDetails: action.payload,
        error: "",
      };
    }
    case FETCH_PRODUCTS_FAILURE: {
      return {
        ...state,
        loading: false,
        productDetails: {},
        error: action.payload,
      };
    }
    default:
      return { ...state };
  }
};
