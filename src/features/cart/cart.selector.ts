import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export const selectCart = createDraftSafeSelector(
  (state: RootState) => state.cart,
  (cart) => cart
);

export const selectCartItems = createDraftSafeSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartCount = createDraftSafeSelector([selectCart], (cart) => {
  const newCartCount = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );
  return newCartCount;
});

export const selectCartSum = createDraftSafeSelector([selectCart], (cart) => {
  const newCartSum = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  );
  return newCartSum;
});