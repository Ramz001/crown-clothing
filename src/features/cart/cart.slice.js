import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartSum: 0,
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
      
      state.cartCount = state.cartItems.reduce(
        (acc, cartItem) => acc + cartItem.quantity,
        0
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

      state.cartCount = state.cartItems.reduce(
        (acc, cartItem) => acc + cartItem.quantity,
        0
      );
      state.cartSum = state.cartItems.reduce(
        (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
        0
      );
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
