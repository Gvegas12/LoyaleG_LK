import React from "react";
import clsx from "clsx";

import styles from "./UILoaderPage.module.scss";
import { UILoader } from "../../UILoader/UI/UILoader";

export interface IUILoaderPageProps {
  className?: string;
}

export const UILoaderPage: React.FC<IUILoaderPageProps> = ({ className }) => (
  <div className={clsx(styles.UILoaderPage, className)}>
    <UILoader className={styles.loader} />
  </div>
);
