import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "jsx",
  // cartItems: [],
  // cartTotalQuantity: 0,
  // cartTotalAmount: 0,
};

const carttSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // const itemIndex = state.cartItems.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      //  else
      // const tempProd={...action.payload,cartQuantity:1}
      // state.cartItems.push(tempProd);

      state.cartItems.push(action.payload);
    },
  },
});

export const { addToCart } = carttSlice.actions;
export default carttSlice.reducer;
