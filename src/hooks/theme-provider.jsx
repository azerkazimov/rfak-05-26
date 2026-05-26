import { useState } from "react";
import { ThemeContext } from "./theme-context";

// const ThemeContext = createContext(); bunu yazmaq istemedim, amma bunu oturdum ./theme-context.js faylinda.

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}  {/* children: App.jsx-deki RouterProvider */}
        </ThemeContext.Provider>
    );
}
