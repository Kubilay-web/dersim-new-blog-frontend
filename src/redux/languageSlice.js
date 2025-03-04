import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "tr",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const selectLanguage = (state) => state.language.language;
export default languageSlice.reducer;
