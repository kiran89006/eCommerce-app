import { combineReducers } from "redux";
import loginReducer from "./Login/reducer";
import { reducer } from "./LoginFetch/reducer";
import { productsDetailsReducer } from "./ProductDetails/reducer";
import { fetchBasketProductsReducer } from "./Basket/reducer";

export const rootReducer = combineReducers({
  loginReducer: loginReducer,
  reducer: reducer,
  productsDetailsReducer: productsDetailsReducer,
  fetchBasketProductsReducer: fetchBasketProductsReducer,
});
