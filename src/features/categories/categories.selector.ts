import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { CategoryMap } from "./categories.types";

export const selectCategories = createDraftSafeSelector(
  (state:RootState) => state.categories,
  (categories) => categories
);

export const selectCategoriesMap = createDraftSafeSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createDraftSafeSelector(
  [selectCategories],
  (categories) => categories.isLoading
);