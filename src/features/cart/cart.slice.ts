import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "./cart.types";
import { CategoryItem } from "../categories/categories.types";

type InitialState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItemType[];
};

type actionType = string;

const initialState: InitialState = {
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
    addItemToCart: (
      state,
      action: PayloadAction<{ cartItem: CategoryItem }>
    ) => {
      const currentCartItem = state.cartItems.find(
        (item) => item.id === action.payload.cartItem.id
      );

      if (!currentCartItem) {
        state.cartItems.push({
          ...action.payload.cartItem,
          quantity: 0,
        });
      }
    },
    removeItemFromCart: (
      state,
      action: PayloadAction<{ cartItem: CategoryItem }>
    ) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.cartItem.id
      );
    },
    changeCartItem: (
      state,
      action: PayloadAction<{ cartItem: CategoryItem; actionType: actionType }>
    ) => {
      const { cartItem, actionType } = action.payload;

      const currentCartItem = state.cartItems.find(
        (item) => item.id === cartItem.id
      );

      if (actionType && actionType === "increment" && currentCartItem) {
        currentCartItem.quantity++;
      }
      if (actionType && actionType === "decrement" && currentCartItem) {
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
