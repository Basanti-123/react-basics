import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({children}) => {
    // This is the begining of HOC
    const [theme, setTheme] = useState("Light");

    const toggleTheme = () => {
        const result = theme === "light" ? "dark": "light";
        setTheme(result);
    };

    return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
   {children}
   </ThemeContext.Provider>
    );
}
export default ThemeContextProvider;