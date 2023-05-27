import React from "react";
import clsx from "clsx";

import styles from "./UILogo.module.scss";

export interface IUILogoProps {
  children: React.ReactNode;
  className?: string;
}

export const UILogo: React.FC<IUILogoProps> = ({ className, children }) => (
  <div className={clsx(styles.UILogo, className)}>{children}</div>
);
