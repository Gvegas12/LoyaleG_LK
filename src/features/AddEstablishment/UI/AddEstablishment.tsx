import React from "react";
import clsx from "clsx";

import styles from "./AddEstablishment.module.scss";
import UI from "@/shared/UI";

export interface IAddEstablishmentProps {
  className?: string;
}

export const AddEstablishment: React.FC<IAddEstablishmentProps> = ({
  className,
}) => (
  <div
    data-testid="addestablishment"
    className={clsx(styles.AddEstablishment, className)}
  >
    <div className={styles.form}>
      <UI.Input required label="Label" />
    </div>
  </div>
);
