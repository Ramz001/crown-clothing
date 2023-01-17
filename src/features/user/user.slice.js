import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.currentUser = JSON.parse(state.currentUser);
    },
  },
});

export default user.reducer;

export const { setCurrentUser } = user.actions;
