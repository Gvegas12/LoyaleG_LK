import React from "react";
import clsx from "clsx";

import styles from "./UILabel.module.scss";

export interface IUILabelProps {
  children: React.ReactNode;
  className?: string;
  required?: boolean;
  buttonText?: string;
  buttonOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const UILabel: React.FC<IUILabelProps> = ({
  className,
  required,
  children,
  buttonText,
  buttonOnClick,
}) => (
  <label className={clsx(styles.UILabel, className)}>
    <div className={styles.labelText}>
      <span>{children}</span>
      {required && <span className={styles.asterisk}>*</span>}
    </div>
    {buttonText && (
      <button onClick={buttonOnClick} className={styles.btn}>
        {buttonText}
      </button>
    )}
  </label>
);
