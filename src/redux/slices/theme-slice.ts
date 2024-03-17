import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "dark",
  reducers: {
    themeToggled(state) {
      return state === "dark" ? "light" : "dark";
    },
  },
});

export const { themeToggled } = themeSlice.actions;
export default themeSlice.reducer;
