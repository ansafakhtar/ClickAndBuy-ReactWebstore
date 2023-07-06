import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartSliceReducer } from "../domain/cart/cartSlice";
import {
  productsByCategorySliceReducer,
  productsSliceReducer,
  singleProductSliceReducer,
} from "../domain/products/productSlice";

const combinedReducer = combineReducers({
  products: productsSliceReducer,
  productsByCategory: productsByCategorySliceReducer,
  product: singleProductSliceReducer,
  cart: cartSliceReducer,
});

export const store = configureStore({
  reducer: combinedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
