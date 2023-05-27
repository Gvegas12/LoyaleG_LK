import React from "react";
import clsx from "clsx";

import styles from "./UISelect.module.scss";

export interface IUISelectProps {
  children: React.ReactNode;
  className?: string;
}

export const UISelect: React.FC<IUISelectProps> = ({ className, children }) => (
  <div className={clsx(styles.UISelect, className)}>{children}</div>
);
