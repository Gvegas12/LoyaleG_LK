import React from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface useThemeResult {
  theme: Theme;
  setNewTheme: (newTheme: Theme) => void;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const setNewTheme = (newTheme: Theme): void => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  return {
    theme,
    setNewTheme,
  };
}
