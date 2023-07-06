import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { delay } from "../../utils/delay";
import { products } from "./products";
import { Product, ProductState, SingleProductState } from "./types";

export const getProducts = createAsyncThunk<Product[]>(
  "product/get",
  async () => {
    // simulating a delay
    await delay(700);
    return products;
  }
);

export const getProductById = createAsyncThunk<Product, string>(
  "products/get",
  async (id: string) => {
    return products.filter((product) => product.id === parseInt(id!))[0];
  }
);

export const getProductByCategory = createAsyncThunk<Product[], string>(
  "productsByCategory/get",
  async (category: string) => {
    return products.filter((product) => product.category === category);
  }
);

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


const initialState3: ProductState = {
  products: [],
  loading: "not loaded",
};

const productsByCategorySlice = createSlice({
  name: "productByCategory",
  initialState: initialState3,
  reducers: {
    cleanupProductsByCategory: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProductByCategory.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getProductByCategory.fulfilled, (state, action) => {
        state.loading = "loaded";
        state.products = action.payload;
      })
      .addCase(getProductByCategory.rejected, (state, action) => {
        state.loading = "error";
        state.error = (action.payload as string) ?? action.error.message;
      });
  },
});

export const productsSliceReducer = productSlice.reducer;
export const singleProductSliceReducer = singleProductSlice.reducer;
export const productsByCategorySliceReducer = productsByCategorySlice.reducer;
export const { cleanupProducts } = productSlice.actions;
export const { cleanupProduct } = singleProductSlice.actions;
export const { cleanupProductsByCategory } = productsByCategorySlice.actions;
export const productsSelector = (state: RootState) => state.products;
export const singleProductSelector = (state: RootState) => state.product;
export const productsByCategorySelector = (state: RootState) => state.productsByCategory;
