import React from "react";
import clsx from "clsx";

import styles from "./UITooltip.module.scss";

type UITooltipMode = "hover" | "static";

export interface IUITooltipProps {
  className?: string;
  children: React.ReactNode;
  mode?: UITooltipMode;
}

export const UITooltip: React.FC<IUITooltipProps> = ({
  className,
  children,
  mode = "hover",
}) => (
  <div className={clsx(styles.UITooltip, styles[mode], className)}>
    <div className={styles.triangle} />
    <div>{children}</div>
  </div>
);
