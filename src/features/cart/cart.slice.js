import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addItemToCart: (state, { payload }) => {
      const currentCartItem = state.cartItems.find(
        (item) => item.id === payload.cartItem.id
      );

      if (!currentCartItem) {
        state.cartItems.push({
          ...payload.cartItem,
          quantity: 0,
        });
      }
    },
    removeItemFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== payload.cartItem.id
      );
    },
    changeCartItem: (state, { payload }) => {
      const { cartItem, actionType } = payload;

      const currentCartItem = state.cartItems.find(
        (item) => item.id === cartItem.id
      );

      if (actionType === "increment") {
        currentCartItem.quantity++;
      }
      if (actionType === "decrement") {
        currentCartItem.quantity--;
      }
    },
  },
});

export const {
  setIsCartOpen,
  changeCartItem,
  addItemToCart,
  removeItemFromCart,
} = cart.actions;

export default cart.reducer;
