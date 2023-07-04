import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./types";

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartItem>) => {
      state.cart.push(action.payload);
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((e) => e.id !== action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
          return { ...item };
        }
        return item;
      });
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.quantity -= 1;
          return { ...item };
        }
        return item;
      });
    },
  },
});

export const cartSliceReducer = cartSlice.reducer;
export const {
  addProductToCart,
  removeProductFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
