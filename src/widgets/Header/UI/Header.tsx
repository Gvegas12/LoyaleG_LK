import React from "react";
import clsx from "clsx";

import styles from "./Header.module.scss";

export interface IHeaderProps {
  className?: string;
}

export const Header: React.FC<IHeaderProps> = ({ className }) => (
  <div data-testid="header" className={clsx(styles.Header, className)} />
);
