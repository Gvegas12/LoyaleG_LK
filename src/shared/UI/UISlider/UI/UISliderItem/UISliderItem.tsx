/* eslint-disable function-paren-newline */
import React from "react";

import clsx from "clsx";
import styles from "./UISliderItem.module.scss";

interface ISliderItemProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

export const UISliderItem: React.FC<ISliderItemProps> = ({
  style,
  children,
  className,
}) => (
  <div style={style} className={clsx(styles.UISliderItem, className)}>
    {children}
  </div>
);
