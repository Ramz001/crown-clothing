import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkUserSession: () => {},
    googleSignInStart: () => {},
    emailSignInStart: () => {},
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signInFailed: (state, action) => {
      state.error = action.payload;
    },
    signOutStart: () => {},
    signOutSuccess: (state, action) => {
      state.currentUser = null;
    },
    signOutFailed: (state, action) => {
      state.error = action.payload;
    },
    signUpStart: () => {},
    signUpFailed: (state, action) => {
      state.error = action.payload;
      alert(state.error.code);
    },
  },
});

export default user.reducer;

export const {
  signInFailed,
  signInSuccess,
  googleSignInStart,
  emailSignInStart,
  checkUserSession,
  signOutStart,
  signOutSuccess,
  signOutFailed,
  signUpStart,
  signUpFailed,
} = user.actions;
