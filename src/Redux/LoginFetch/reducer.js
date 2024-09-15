import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from "./actions";

const initialstate = {
  loading: false,
  login: [],
  error: "",
};
export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        login: action.payload,
        error: "",
      };
    }
    case FETCH_LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        login: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

// globalState = {
//   loginReducer: {
//     loading: false,
//     login: [],
//     error: "",
//   },
//   productsDetailsReducer: {
//     loading: false,
//     productDetails: {},
//     error: "",
//   },
//   reducer: {
//     loading: false,
//     login: [],
//     error: "",
//   },
// };
