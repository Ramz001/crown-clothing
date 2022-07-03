import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/user.slice'
import categoriesReducer from '../features/categories/categories.slice'

const store = configureStore({
    reducer:{
        user: userReducer,
        categories: categoriesReducer
    }
})

export default store