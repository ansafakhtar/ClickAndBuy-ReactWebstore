import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartSliceReducer } from "../domain/cart/cartSlice";
import {
  productsSliceReducer,
  singleProductSliceReducer,
} from "../domain/products/productSlice";

const combinedReducer = combineReducers({
  products: productsSliceReducer,
  product: singleProductSliceReducer,
  cart: cartSliceReducer,
});

export const store = configureStore({
  reducer: combinedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
