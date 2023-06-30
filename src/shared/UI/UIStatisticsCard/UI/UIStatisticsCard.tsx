import React from "react";
import clsx from "clsx";

import SwapIcon from "./icons/swap.svg";
import PlusIcon from "./icons/plus.svg";

import styles from "./UIStatisticsCard.module.scss";

interface IUIStatisticsCardChildrenProps {
  className?: string;
  children: React.ReactNode;
}

const UIStatisticsCardMiddleChildren: React.FC<IUIStatisticsCardChildrenProps> =
  React.memo(({ className, children }) => (
    <div className={clsx("UIStatisticsCardMiddleChildren", className)}>
      {children}
    </div>
  ));

const UIStatisticsCardFilterChildren: React.FC<
  IUIStatisticsCardChildrenProps & {
    icon?: React.ReactSVGElement;
  }
> = React.memo(({ className, children, icon }) => (
  <div className={clsx("UIStatisticsCardFilterChildren", className)}>
    <div>{children}</div>
    {icon || <SwapIcon className={styles.swapIcon} />}
  </div>
));

export interface IUIStatisticsCardProps {
  addNew?: boolean;
  showIcon?: boolean;
  icon?: React.ReactSVGElement;
  title?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const UIStatisticsCard: React.FC<IUIStatisticsCardProps> = ({
  addNew,
  showIcon = true,
  icon,
  title,
  disabled,
  children,
  className,
  onClick,
}) => (
  <div
    data-testid="statisticsCard"
    onClick={onClick}
    className={clsx(
      addNew ? styles.addNew : styles.UIStatisticsCard,
      disabled && styles.disabled,
      className
    )}
  >
    {addNew ? (
      showIcon && <PlusIcon className={styles.plus} />
    ) : (
      <>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          {icon}
        </div>
        {children}
      </>
    )}
  </div>
);

export {
  UIStatisticsCard as Body,
  UIStatisticsCardFilterChildren as Filter,
  UIStatisticsCardMiddleChildren as MiddleChildren,
};
