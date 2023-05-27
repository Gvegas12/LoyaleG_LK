import React from "react";
import clsx from "clsx";

import styles from "./UIBox.module.scss";

export interface IUIBoxProps {
  children: React.ReactNode;
  className?: string;
}

export const UIBox: React.FC<IUIBoxProps> = ({ className, children }) => (
  <div className={clsx(styles.UIBox, className)}>{children}</div>
);
