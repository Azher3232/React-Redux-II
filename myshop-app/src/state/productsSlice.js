import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./status";

const initialState = {
  productsItems: [],
  status: IDLE,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

const productsSlice = createSlice({
  // Slice name
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.productsItems = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = FAILED;
        state.error = action.error.message;
      });
  },
});

// Destructuring so we can rename the reducer
const { reducer: productsReducer } = productsSlice;
export default productsReducer;
