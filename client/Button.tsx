"use client";
import { useDispatch } from "react-redux";
import { Button, CustomCard } from "common-ui-design-component";

import { toggleThemeMode } from "@HM/themeStore/themeStore";

export default function ClientButtonComponent() {
    const dispatch = useDispatch();
    return (
        <div className="p-10">
            <Button variant="primary">Click Me</Button>
            <Button variant="secondary" className="ml-2">
                Cancel
            </Button>
            <CustomCard title="Reusable Component" description="This is built with Material UI + Tailwind" onClick={() => dispatch(toggleThemeMode())} />
            <h1>Hello</h1>
        </div>
    );
}
