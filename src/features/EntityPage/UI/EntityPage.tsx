import React from "react";
import clsx from "clsx";

import styles from "./EntityPage.module.scss";

export interface IEntityPageProps {
  children: React.ReactNode;
  className?: string;
}

export const EntityPage: React.FC<IEntityPageProps> = ({ className, children }) => (
  <div className={clsx(styles.EntityPage, className)}>{children}</div>
);
