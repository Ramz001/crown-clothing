import { createSlice, createDraftSafeSelector } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const categories = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const selectCategories = createDraftSafeSelector(
  (state) => state.categories,
    (categories) => {
        return categories.categories
    }
);

export const selectCategoriesMap = createDraftSafeSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const { setCategories } = categories.actions;

export default categories.reducer;
