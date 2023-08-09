import { createContext } from "react";

export enum ThemeType {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextProps {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const local_storage_theme = "theme";
