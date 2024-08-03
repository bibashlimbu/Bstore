import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    deleteProduct: (state, action) => {
      //action = productId
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    increaseProductQuantity: (state, action) => {
      //action = productId
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      product.quantity++;
      product.totalPrice = product.quantity * product.unitPrice;
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    decreaseProductQuantity: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      product.quantity--;
      product.totalPrice = product.quantity * product.unitPrice;

      if (product.quantity === 0)
        cartSlice.caseReducers.deleteProduct(state, action);

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    clearCart: (state, action) => {
      state.cart = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, product) => sum + product.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, product) => sum + product.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((product) => product.id === id)?.quantity ?? 0;
