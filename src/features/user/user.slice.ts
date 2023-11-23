import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../../utils/firebase/firebase.utils";
import { SignInWithEmailType, SignUpWithEmailType } from "./user.types";

type InitialState = {
  readonly currentUser: UserData | null;
  readonly error: string;
};
const initialState: InitialState = {
  currentUser: null,
  error: "",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    checkUserSession: () => {},
    googleSignInStart: () => {},
    emailSignInStart: (state, action:PayloadAction<SignInWithEmailType> ) => {},
    signInSuccess: (
      state,
      action: PayloadAction<UserData & { id: string }>
    ) => {
      state.currentUser = action.payload;
    },
    signInFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    signOutStart: () => {},
    signOutSuccess: (state) => {
      state.currentUser = null;
    },
    signOutFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    signUpStart: (state, action: PayloadAction<SignUpWithEmailType>) => {},
    signUpFailed: (state, action: PayloadAction<string>) => {
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
