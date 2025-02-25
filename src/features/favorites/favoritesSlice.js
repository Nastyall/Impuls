import { createSlice,  } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.list.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;