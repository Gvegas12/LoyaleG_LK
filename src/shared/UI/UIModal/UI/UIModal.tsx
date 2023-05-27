import React from "react";
import clsx from "clsx";

import styles from "./UIModal.module.scss";

export interface IUIModalProps {
  children: React.ReactNode;
  className?: string;
}

export const UIModal: React.FC<IUIModalProps> = ({ className, children }) => (
  <div className={clsx(styles.UIModal, className)}>{children}</div>
);
