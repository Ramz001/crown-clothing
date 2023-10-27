import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export const selectCurrentUser = createDraftSafeSelector(
  (state:RootState) => state.user,
  (user) => user.currentUser
)