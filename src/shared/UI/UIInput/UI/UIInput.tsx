import React from "react";
import clsx from "clsx";

import styles from "./UIInput.module.scss";

export interface IUIInputProps {
  children: React.ReactNode;
  className?: string;
}

export const UIInput: React.FC<IUIInputProps> = ({ className, children }) => (
  <div className={clsx(styles.UIInput, className)}>{children}</div>
);
