import { useContext } from "react";
import { ThemeType, ThemeContext, local_storage_theme } from "./ThemeContext";

interface UseThemeInterface {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeInterface => {
  const { theme, setTheme } = useContext(ThemeContext);
  const onToggleTheme = () => {
    const newTheme =
      theme == ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(local_storage_theme, newTheme);
  };

  return {
    theme,
    toggleTheme: onToggleTheme,
  };
};
