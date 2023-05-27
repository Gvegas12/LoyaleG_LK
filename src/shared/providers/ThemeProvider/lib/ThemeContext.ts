import { createContext } from "react";

export enum Theme {
  BLUE = "app_blue_theme",
  PINK = "app_pink_theme",
  GREEN = "app_green_theme",
  ORANGE = "app_orange_theme",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
