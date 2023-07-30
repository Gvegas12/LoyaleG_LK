import React from "react";

import UI, { IUIInputCheckboxProps } from "@/shared/UI";

import styles from "./SubscriptionCard.module.scss";

export interface ISubscriptionCardProps extends IUIInputCheckboxProps {
  title: string;
  img: string;
}

export const SubscriptionCard: React.FC<ISubscriptionCardProps> = React.memo(
  ({ img, title, ...checkboxProps }) => (
    <div className={styles.card}>
      <img className={styles.img} src={img} alt="subscription card" />
      <div className={styles.checkboxWrapper}>
        <UI.Checkbox {...checkboxProps} />
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  )
);
