"use client";

import { useRef } from "react";
import { Provider } from "react-redux";

import { ThemeMode } from "@HM/materialTheme/interface.material.theme";
import { AppStore, combinedStore } from "@HM/stateManagement/combinedStores";
import { setThemeMode } from "@HM/themeStore/themeStore";

export default function StoreProvider({ children, mode }: { children: React.ReactNode; mode: ThemeMode }) {
    const storeRef = useRef<AppStore>(undefined);
    if (!storeRef.current) {
        storeRef.current = combinedStore();
        storeRef.current.dispatch(setThemeMode(mode));
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
