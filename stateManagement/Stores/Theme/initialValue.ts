import { ThemeMode } from "@HM/materialTheme/interface.material.theme";

export interface ThemeState {
    mode: ThemeMode;
}

const initialThemeState: ThemeState = {
    mode: "light", // default mode
};

export default initialThemeState;
