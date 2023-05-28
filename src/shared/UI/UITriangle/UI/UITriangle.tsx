import React from "react";
import clsx from "clsx";

import styles from "./UITriangle.module.scss";

export interface IUITriangleProps {
  className?: string;
  active?: boolean;
}

export const UITriangle: React.FC<IUITriangleProps> = ({
  className,
  active,
}) => (
  <div
    data-testid="uitriangle"
    className={clsx(styles.UITriangle, active && styles.active, className)}
  />
);
