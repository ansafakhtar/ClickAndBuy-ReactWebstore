import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { delay } from "../../utils/delay";
import { products } from "./products";
import { Product, ProductState, SingleProductState } from "./types";

export const getProducts = createAsyncThunk<Product[]>(
  "books/get",
  async () => {
    // simulating a delay
    await delay(300);
    return products;
  }
);

export const getProductById = createAsyncThunk<Product, string>(
  "products/get",
  async (id: string) => {
    return products.filter((product) => product.id === parseInt(id!))[0];
  }
);

// The code below is how a real world async thunk would look like

// export const getBooks = createAsyncThunk<Book[]>('books/get', async (_, thunkApi) => {
//   const {rejectWithValue, signal} = thunkApi;

//   const response = await fetch('/books', { signal });

//   const data = await response.json();

//   if (response.status !== 200) {
//     return rejectWithValue(data as string)
//   }

//   return data as Book[];
// })

const initialState: ProductState = {
  products: [],
  loading: "not loaded",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanupProducts: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = "loaded";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = "error";
        state.error = (action.payload as string) ?? action.error.message;
      });
  },
});

const initialSingleState: SingleProductState = {
  product: null,
  loading: "not loaded",
  error: "",
};

const singleProductSlice = createSlice({
  name: "product",
  initialState: initialSingleState,
  reducers: {
    cleanupProduct: () => initialSingleState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = "loaded";
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = "error";
        state.error = (action.payload as string) ?? action.error.message;
      });
  },
});

export const productsSliceReducer = productSlice.reducer;
export const singleProductSliceReducer = singleProductSlice.reducer;
export const { cleanupProducts } = productSlice.actions;
export const { cleanupProduct } = singleProductSlice.actions;
export const productsSelector = (state: RootState) => state.products;
export const singleProductSelector = (state: RootState) => state.product;
