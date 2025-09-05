import type { Metadata } from "next";

import { ThemeMode } from "@HM/materialTheme/interface.material.theme";
import ThemeRegistry from "@HM/materialTheme/Wrapper.materia";
import ReduxProvider from "@HM/stateManagement/StoreProvider";

export const metadata: Metadata = {
    title: "Hotel Management",
    description: "Manage hotel operations.",
};

const getMode: Promise<ThemeMode> = new Promise((resolve) => {
    setTimeout(() => {
        resolve("dark");
    }, 2000);
});

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const data = await getMode;
    return (
        <html lang="en">
            <body>
                <ReduxProvider mode={data}>
                    <ThemeRegistry>{children}</ThemeRegistry>
                </ReduxProvider>
            </body>
        </html>
    );
}
