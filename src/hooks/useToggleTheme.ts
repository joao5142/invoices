import { ToggleThemeContext } from "@/contexts/ToggleTheme";
import { useContext } from "react";

export function useToggleTheme() {
  const { toggleTheme } = useContext(ToggleThemeContext);

  return { toggleTheme };
}
