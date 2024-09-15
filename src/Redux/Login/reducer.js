import { PASSWORD, USERID } from "./actions";

const initialstate = {
  userId: "",
  password: "",
};
const loginReducer = (state = initialstate, action) => {
  switch (action.type) {
    case USERID:
      return {
        ...state,
        userId: action.payload,
      };
    case PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default loginReducer;
