import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditing: false,
  product: {},
};
const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    updateProduct(state, action) {
      state.isEditing = true;
      state.product = action.payload;
    },
    addProduct(state) {
      state.isEditing = false;
      state.product = {};
    },
  },
});
export const { updateProduct, addProduct } = productSlice.actions;
export default productSlice.reducer;
