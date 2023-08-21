import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const selectCurrentUser = createDraftSafeSelector(
  (state) => state.user,
  (user) => user.currentUser
)