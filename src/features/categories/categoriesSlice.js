import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: "1", name: "Футболки" },
    { id: "2", name: "Блузки" },
    { id: "3", name: "Кофты" },
    { id: "4", name: "Платья" },
    { id: "5", name: "Рубашки" },
  ],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: {
      reducer: (state, action) => {
        state.list.push(action.payload);
      },
      prepare: (name) => {
        return { payload: { id: nanoid(), name } };
      },
    },
    deleteCategory: (state, action) => {
      state.list = state.list.filter(
        (category) => category.id !== action.payload
      );
    },
    updateCategory: (state, action) => {
      const { id, name } = action.payload;
      state.list = state.list.map((category) =>
        category.id === id ? { ...category, name } : category
      );
    },
  },
});

export const { addCategory, deleteCategory, updateCategory } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;