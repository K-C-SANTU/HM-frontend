import themeStore from "@HM/themeStore/themeStore";

import { configureStore } from "@reduxjs/toolkit";

export const combinedStore = () => {
    return configureStore({
        reducer: {
            theme: themeStore,
        },
    });
};
export type AppStore = ReturnType<typeof combinedStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
