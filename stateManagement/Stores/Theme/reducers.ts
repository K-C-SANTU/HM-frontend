import { ThemeMode } from "@HM/materialTheme/interface.material.theme";
import { ThemeState } from "@HM/themeStore/initialValue";

import { PayloadAction, WritableDraft } from "@reduxjs/toolkit";

const themeStoreReducers = {
    setThemeMode(state: WritableDraft<ThemeState>, action: PayloadAction<ThemeMode>) {
        state.mode = action.payload;
    },
    toggleThemeMode(state: WritableDraft<ThemeState>) {
        state.mode = state.mode === "light" ? "dark" : "light";
    },
};

export default themeStoreReducers;
