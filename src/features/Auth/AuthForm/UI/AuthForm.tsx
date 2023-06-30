import React from "react";
import clsx from "clsx";

import UI from "@/shared/UI";

import styles from "./AuthForm.module.scss";

interface IAuthFormProps
  extends Omit<React.HTMLProps<HTMLFormElement>, "title"> {
  title?: string;
}

export const AuthForm: React.FC<IAuthFormProps> = ({
  title,
  className,
  children,
  ...props
}) => (
  <UI.Box className={clsx(styles.AuthForm, className)}>
    <h3 className={styles.title}>{title}</h3>
    <form {...props}>{children}</form>
  </UI.Box>
);
