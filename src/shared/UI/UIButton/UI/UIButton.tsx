import React from "react";
import clsx from "clsx";

import styles from "./UIButton.module.scss";
import { UITriangle } from "../../UITriangle";

type ButtonThemeType = "outline" | "fill" | "clear";
type ButtonSizeType = "small" | "medium" | "large" | "fullwidth";
type ButtonColorType = "black" | "primary";
type ButtonVariantType = "select" | "default";

export interface IUIButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSizeType;
  theme?: ButtonThemeType;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
}

export const UIButton: React.FC<IUIButtonProps> = ({
  className,
  children,
  theme = "fill",
  size = "medium",
  color = "primary",
  variant = "default",
  ...props
}) => {
  const [selectActive, setSelectActive] = React.useState<boolean>();

  return (
    <button
      className={clsx(
        styles.UIButton,
        styles[theme],
        styles[size],
        styles[color],
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
      {variant === "select" && (
        <UITriangle className={styles.triangle} active={selectActive} />
      )}
    </button>
  );
};
