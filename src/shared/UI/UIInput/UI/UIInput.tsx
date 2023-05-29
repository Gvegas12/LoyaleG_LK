/* eslint-disable jsx-a11y/label-has-associated-control */ // TODO
import React from "react";
import clsx from "clsx";

import styles from "./UIInput.module.scss";
import { IUILabelProps, UILabel } from "../../UILabel";

type HTMLInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

export interface IUIInputProps extends HTMLInputProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  fullwidth?: boolean;
  inputClassName?: string;
  label?: IUILabelProps;
}

export const UIInput: React.FC<IUIInputProps> = ({
  value,
  onChange,
  className,
  fullwidth,
  inputClassName,
  label,
  ...props
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
  };

  return (
    <div
      style={{ width: fullwidth ? "100%" : "" }}
      className={clsx(styles.UIInput, className)}
    >
      {label && <UILabel {...label} />}
      <input
        data-testid="uiinput"
        value={value}
        onChange={onChangeHandler}
        className={clsx(styles.input, "focus--primary", inputClassName)}
        {...props}
      />
    </div>
  );
};
