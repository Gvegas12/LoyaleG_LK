import React from "react";
import clsx from "clsx";

import SwapIcon from "./icons/swap.svg";

import styles from "./UIStatisticsCard.module.scss";

interface IUIStatisticsChildrenProps {
  className?: string;
  children: React.ReactNode;
}

const UIStatisticsCardMiddleChildren: React.FC<IUIStatisticsChildrenProps> = ({
  className,
  children,
}) => (
  <div className={clsx("UIStatisticsCardMiddleChildren", className)}>
    {children}
  </div>
);

const UIStatisticsCardFilterChildren: React.FC<
  IUIStatisticsChildrenProps & {
    icon?: React.ReactSVGElement;
  }
> = ({ className, children, icon }) => (
  <div className={clsx("UIStatisticsCardFilterChildren", className)}>
    <div>{children}</div>
    {icon || <SwapIcon className={styles.swapIcon} />}
  </div>
);

export interface IUIStatisticsCardProps {
  icon?: React.ReactSVGElement;
  title: string;
  pointer?: boolean;
  children: React.ReactNode;
  className?: string;
}

const UIStatisticsCard: React.FC<IUIStatisticsCardProps> = ({
  icon,
  title,
  pointer = true,
  children,
  className,
}) => (
  <div
    data-testid="statisticsCard"
    className={clsx(
      styles.UIStatisticsCard,
      pointer && styles.pointer,
      className
    )}
  >
    <div className={styles.header}>
      <p className={styles.title}>{title}</p>
      {icon}
    </div>
    {children}
  </div>
);

export {
  UIStatisticsCard as Body,
  UIStatisticsCardFilterChildren as Filter,
  UIStatisticsCardMiddleChildren as MiddleChildren,
};
