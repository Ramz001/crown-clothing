import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/user.slice";
import categoriesReducer from "../features/categories/categories.slice";
import cartReducer from "../features/cart/cart.slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});

export default store;
