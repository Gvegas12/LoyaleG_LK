import React from "react";
import clsx from "clsx";

import styles from "./Sidebar.module.scss";

export interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => (
  <div
    data-testid="test--sidebar"
    className={clsx(styles.Sidebar, className)}
  />
);