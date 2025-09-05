import initialThemeState from "@HM/themeStore/initialValue";
import themeStoreReducers from "@HM/themeStore/reducers";

import { createSlice } from "@reduxjs/toolkit";

const themeState = createSlice({
    name: "theme",
    initialState: initialThemeState,
    reducers: themeStoreReducers,
});

export const { setThemeMode, toggleThemeMode } = themeState.actions;
const themeStore = themeState.reducer;
export default themeStore;
