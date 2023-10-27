import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  currentUser: Object;
  error: Error | null;
}
const initialState:InitialState = {
  currentUser: {},
  error: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkUserSession: () => {},
    googleSignInStart: () => {},
    emailSignInStart: () => {},
    signInSuccess: (state, action:PayloadAction<Object>) => {
      state.currentUser = action.payload;
    },
    signInFailed: (state, action:PayloadAction<Error>) => {
      state.error = action.payload;
    },
    signOutStart: () => {},
    signOutSuccess: (state) => {
      state.currentUser = {};
    },
    signOutFailed: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    signUpStart: () => {},
    signUpFailed: (state, action: PayloadAction<Error> ) => {
      state.error = action.payload;
      alert(state.error);
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
