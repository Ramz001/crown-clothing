import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "./categories.types";

type InitialState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: string;
};

const initialState: InitialState = {
  categories: [],
  isLoading: false,
  error: "",
};

const categories = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchCategoriesStart: (state) => {
      state.isLoading = true;
    },
    fetchCategoriesSuccess: (state, action: PayloadAction<Category[]>) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    fetchCategoriesFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} = categories.actions;

export default categories.reducer;
