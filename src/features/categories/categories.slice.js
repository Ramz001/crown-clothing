import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoriesMap: {}
}

const categories = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategoriesMap: (state, action) => {
            state.categoriesMap = action.payload
        }
    }
})

export default categories.reducer

export const { setCategoriesMap } = categories.actions