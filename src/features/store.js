import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import userSlice from "./user/userSlice";
import favoritesSlice from "./favorites/favoritesSlice"; 

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    user: userSlice,
    favorites: favoritesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});