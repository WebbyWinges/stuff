import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice  from "./categories/categoriesSlice"
import productSlice from "./products/productsSlice"
import { apiSlice } from "./api/apiSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
    reducer: { 
        categories: categoriesSlice,
        products: productSlice,
        user: userSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true,
});