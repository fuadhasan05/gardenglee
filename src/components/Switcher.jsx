import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../Hooks/useDarkSide";

export default function Switcher() {
    const [theme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(theme === "dark");

    useEffect(() => {
        setDarkSide(theme === "dark");
    }, [theme]);

    const toggleDarkMode = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    return (
        <DarkModeSwitch
            style={{ marginBottom: "" }}
            checked={darkSide}
            onChange={toggleDarkMode}
            size={30}
        />
    );
}