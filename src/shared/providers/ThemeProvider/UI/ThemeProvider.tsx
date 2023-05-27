import React from "react";
import {
  Theme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
} from "../lib/ThemeContext";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.BLUE;

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: Theme;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = React.useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = React.useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
