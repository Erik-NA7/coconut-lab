import {
  createContext,
  useContext,
  useState
} from "react";


export const ThemeContext = createContext({
  theme: "light",
  changeTheme: () => {},
  darkTheme: () => {},
  lightTheme: () => {},
});


export default function ThemeProvider({ children }) {
  
  const [ theme, setTheme ] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
