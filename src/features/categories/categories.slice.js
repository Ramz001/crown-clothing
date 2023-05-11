import {
  createSlice,
  createDraftSafeSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const getCategoriesMap = createAsyncThunk(
  "categories/getCategoriesMap",
  async (req, thunkAPI) => {
    const res = await getCategoriesAndDocuments("categories");
    return res;
  }
);

const categories = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoriesMap.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategoriesMap.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(getCategoriesMap.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

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

export const { setCategories } = categories.actions;

export default categories.reducer;
