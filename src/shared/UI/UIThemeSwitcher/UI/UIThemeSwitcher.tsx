import React from "react";
import clsx from "clsx";

import { Theme, useTheme } from "@/shared/providers/ThemeProvider";
import { UIButton } from "../../UIButton";
import ChangeThemeIcon from "@/shared/assets/img/icons/changeThemeIcon.svg";

import styles from "./UIThemeSwitcher.module.scss";

export interface IUIThemeSwitcherProps {
  className?: string;
}

export const UIThemeSwitcher: React.FC<IUIThemeSwitcherProps> = ({
  className,
}) => {
  const [count, setCount] = React.useState(0);
  const { setNewTheme } = useTheme();

  const onChangeTheme = (): void => {
    /* TODO */
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
    if (count > 4) {
      setCount(0);
    }
  };

  return (
    <UIButton
      data-testid="test--uithemeswitcher"
      onClick={onChangeTheme}
      className={clsx(styles.UIThemeSwitcher, className)}
    >
      <ChangeThemeIcon />
    </UIButton>
  );
};
