import React from "react";
import clsx from "clsx";

import styles from "./Footer.module.scss";

export interface IFooterProps {
  className?: string;
}

export const Footer: React.FC<IFooterProps> = ({ className }) => (
  <footer
    data-testid="test--footer"
    className={clsx(styles.Footer, className)}
  />
);
