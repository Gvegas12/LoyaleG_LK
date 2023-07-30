import React from "react";
import clsx from "clsx";
import { UISliderWindow } from "../UISliderWindow/UISliderWindow";

import styles from "./UISlider.module.scss";

interface IUISliderProps {
  children: React.ReactNode;
  className?: string;
}

export const UISlider: React.FC<IUISliderProps> = ({ className, children }) => (
  <div className={clsx(styles.UISlider, className)}>
    <UISliderWindow>{children}</UISliderWindow>
  </div>
);
