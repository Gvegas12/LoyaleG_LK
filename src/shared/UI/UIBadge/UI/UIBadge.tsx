import React from "react";
import clsx from "clsx";

import { UIBox } from "../../UIBox";

import styles from "./UIBadge.module.scss";

export interface IUIBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const UIBadge: React.FC<IUIBadgeProps> = React.memo(
  ({ className, children }) => (
    <UIBox className={clsx(styles.UIBadge, className)}>{children}</UIBox>
  )
);
