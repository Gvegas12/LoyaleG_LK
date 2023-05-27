import React from "react";
import clsx from "clsx";

import styles from "./UITriangle.module.scss";

export interface IUITriangleProps {
  className?: string;
}

export const UITriangle: React.FC<IUITriangleProps> = ({ className }) => (
  <div
    data-testid="uitriangle"
    className={clsx(styles.UITriangle, className)}
  />
);
