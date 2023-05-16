import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const selectCategories = createDraftSafeSelector(
  (state) => state.categories,
  (categories) => categories
);

export const selectCategoriesMap = createDraftSafeSelector(
  [selectCategories],
  (categories) =>
    categories.categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createDraftSafeSelector(
  [selectCategories],
  (categories) => categories.isLoading
);