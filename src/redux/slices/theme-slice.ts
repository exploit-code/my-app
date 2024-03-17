import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    themeToggled(state) {
      return state === "light" ? "dark" : "light";
    },
  },
});

export const { themeToggled } = themeSlice.actions;
export default themeSlice.reducer;
