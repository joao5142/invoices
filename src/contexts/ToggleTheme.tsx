import { ReactNode, createContext, useState } from "react";
import { light, dark } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

interface ToggleThemeContextProps {
  toggleTheme: () => void;
}

export const ToggleThemeContext = createContext({} as ToggleThemeContextProps);

interface ToggleThemeProviderProps {
  children: ReactNode;
}
export function ToggleThemeProvider({ children }: ToggleThemeProviderProps) {
  const [theme, setTheme] = useState(light);
  const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">("light");

  function toggleTheme() {
    if (selectedTheme == "light") {
      setTheme(dark);
      setSelectedTheme("dark");
    } else {
      setTheme(light);
      setSelectedTheme("light");
    }
  }

  return (
    <ToggleThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ToggleThemeContext.Provider>
  );
}
