import React from "react";
import clsx from "clsx";

import styles from "./UIButton.module.scss";

type ButtomThemeType = "outline" | "fill" | "clear";
type ButtomSizeType = "small" | "medium" | "large" | "fullwidth";

export interface IUIButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtomSizeType;
  theme?: ButtomThemeType;
}

export const UIButton: React.FC<IUIButtonProps> = ({
  className,
  children,
  theme = "fill",
  size = "medium",
  ...props
}) => (
  <button
    className={clsx(styles.UIButton, styles[theme], styles[size], className)}
    {...props}
  >
    {children}
  </button>
);
