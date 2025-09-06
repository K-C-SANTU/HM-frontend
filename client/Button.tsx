"use client";
import { useDispatch } from "react-redux";
import { Button } from "common-ui-design-component";

import { toggleThemeMode } from "@HM/themeStore/themeStore";

export default function ClientButtonComponent() {
    const dispatch = useDispatch();

    return (
        <div className="p-10">
            <Button variant="outlined" sx={{ m: 0 }} onClick={() => dispatch(toggleThemeMode())}>
                Click Me
            </Button>
            <Button className="ml-2">Cancel</Button>
        </div>
    );
}
