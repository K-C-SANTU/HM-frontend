"use client";

import * as React from "react";

import { CustomThemeConfig, ThemeMode } from "@HM/materialTheme/interface.material.theme";
import getThemeConfig from "@HM/materialTheme/material.theme";
import { useAppSelector } from "@HM/stateManagement/hook";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const mode = useAppSelector((state) => state.theme.mode);
    const theme = createTheme(getThemeConfig(mode as ThemeMode) as CustomThemeConfig);

    return (
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
