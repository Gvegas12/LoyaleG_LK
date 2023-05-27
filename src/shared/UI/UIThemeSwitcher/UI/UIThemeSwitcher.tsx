import React from "react";
import clsx from "clsx";

import styles from "./UIThemeSwitcher.module.scss";

import { Theme, useTheme } from "@/shared/providers/ThemeProvider";
import UI from "../..";

export interface IUIThemeSwitcherProps {
  children?: React.ReactNode;
  className?: string;
}

export const UIThemeSwitcher: React.FC<IUIThemeSwitcherProps> = ({
  className,
  children,
}) => {
  const [count, setCount] = React.useState(0);
  const { theme, setNewTheme } = useTheme();

  const onChangeTheme = (): void => {
    setCount((prev) => (prev += 1));
    if (count === 1) {
      setNewTheme(Theme.BLUE);
    }
    if (count === 2) {
      setNewTheme(Theme.GREEN);
    }
    if (count === 3) {
      setNewTheme(Theme.ORANGE);
    }
    if (count === 4) {
      setNewTheme(Theme.PINK);
    }
    if (count >= 5) {
      setCount(0);
    }
  };

  return (
    <UI.Button
      onClick={onChangeTheme}
      className={clsx(styles.UIThemeSwitcher, className)}
    >
      changeTheme
      {theme}
    </UI.Button>
  );
};
