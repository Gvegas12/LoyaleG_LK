import React from "react";
import clsx from "clsx";

import styles from "./UIScrollSlider.module.scss";

interface IUIScrollSliderProps {
  children: React.ReactNode;
  className?: string;
}

export const UIScrollSlider: React.FC<IUIScrollSliderProps> = ({ className, children }) => (
  <div className={clsx(styles.UIScrollSlider, className)}>{children}</div>
);
