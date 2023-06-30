import React from "react";
import clsx from "clsx";

import styles from "./UILoader.module.scss";

interface IUILoaderProps {
  className?: string;
}

export const UILoader: React.FC<IUILoaderProps> = ({ className }) => (
  <div className={clsx(styles.spinnerBox, className)}>
    <div className={clsx(styles.blueOrbit, styles.leo)} />
    <div className={clsx(styles.greenOrbit, styles.leo)} />
    <div className={clsx(styles.redOrbit, styles.leo)} />
    <div className={clsx(styles.whiteOrbit, styles.w1, styles.leo)} />
    <div className={clsx(styles.whiteOrbit, styles.w2, styles.leo)} />
    <div className={clsx(styles.whiteOrbit, styles.w3, styles.leo)} />
  </div>
);
