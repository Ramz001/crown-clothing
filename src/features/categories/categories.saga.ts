import { call, all, takeLatest, put } from "typed-redux-saga/macro";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.slice";

export function* getCategoriesAsync() {
  try{
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray))
  } catch(error){
    yield* put(fetchCategoriesFailed(error as string))
  }
}

export function* onFetchCategories() {
  yield* takeLatest('categories/fetchCategoriesStart', getCategoriesAsync);
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
