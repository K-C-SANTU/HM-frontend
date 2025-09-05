import { ThemeOptions } from "@mui/material/styles";

export interface CustomThemeConfig extends ThemeOptions {
    palette?: ThemeOptions["palette"];
    typography?: ThemeOptions["typography"];
    shape?: ThemeOptions["shape"];
    spacing?: number;
    breakpoints?: ThemeOptions["breakpoints"];
    components?: ThemeOptions["components"];
}
export type ThemeMode = "light" | "dark";
