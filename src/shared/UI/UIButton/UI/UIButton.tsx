import React from "react";
import clsx from "clsx";

import styles from "./UIButton.module.scss";

export interface IUIButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const UIButton: React.FC<IUIButtonProps> = ({
  className,
  children,
  ...props
}) => (
  <button {...props} className={clsx(styles.UIButton, className)}>
    {children}
  </button>
);
