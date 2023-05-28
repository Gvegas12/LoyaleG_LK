import React from "react";
import clsx from "clsx";

import styles from "./UITable.module.scss";

export interface IUITableProps {
  className?: string;
}

export const UITable: React.FC<IUITableProps> = ({ className }) => (
  <div className={clsx(styles.UITable, className)}>
    <div className={clsx(styles.tr, styles.thead)}>
      <div>Name</div>
      <div>Telegram</div>
      <div>Phone</div>
      <div>B-day</div>
      <div>Current cups</div>
      <div>Cups for given</div>
    </div>
    <div className={styles.tbody}>
      <div className={styles.tr}>
        <div>Jack</div>
        <div>t.me@jackkk</div>
        <div>888888888</div>
        <div>18.19.1929</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className={styles.tr}>
        <div>Jack</div>
        <div>t.me@jackkk</div>
        <div>888888888</div>
        <div>18.19.1929</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className={styles.tr}>
        <div>Jack</div>
        <div>t.me@jackkk</div>
        <div>888888888</div>
        <div>18.19.1929</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className={styles.tr}>
        <div>Jack</div>
        <div>t.me@jackkk</div>
        <div>888888888</div>
        <div>18.19.1929</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  </div>
);
