import fetchBasketProductsAPI from "./actionCreator";
import {
  FETCH_BASKETPRODUCTS_FAILURE,
  FETCH_BASKETPRODUCTS_REQUEST,
  FETCH_BASKETPRODUCTS_SUCCESS,
} from "./actions";

const initialstate = {
  loading: false,
  cartData: {},
  error: "",
};

export const fetchBasketProductsReducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_BASKETPRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_BASKETPRODUCTS_SUCCESS: {
      return {
        ...state,
        cartData: action.payload,
        error: "",
        loading: false,
      };
    }
    case FETCH_BASKETPRODUCTS_FAILURE: {
      return {
        ...state,
        cartData: {},
        error: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
