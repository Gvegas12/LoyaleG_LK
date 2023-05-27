/* eslint-disable jsx-a11y/label-has-associated-control */ // TODO
import React from "react";
import clsx from "clsx";

import styles from "./UIInput.module.scss";

type HTMLInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

export interface IUIInputProps extends HTMLInputProps {
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  className?: string;
  fullwidth?: boolean;
  inputClassName?: string;
  label?: string;
  labelClassName?: string;
  labelButton?: string;
  labelButtonOnClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const UIInput: React.FC<IUIInputProps> = ({
  value,
  onChange,
  required,
  className,
  fullwidth,
  inputClassName,
  label,
  labelClassName,
  labelButton,
  labelButtonOnClick,
  ...props
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
  };

  const onLabelButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (labelButtonOnClick) labelButtonOnClick(e);
  };

  return (
    <div
      style={{ width: fullwidth ? "100%" : "" }}
      className={clsx(styles.UIInput, className)}
    >
      <label className={clsx(styles.label, "label", labelClassName)}>
        <div className={styles.labelName}>
          <span>{label}</span>
          {required && <span className={styles.asterisk}>*</span>}
        </div>
        {labelButton && (
          <button onClick={onLabelButtonClick} className={styles.labelBtn}>
            {labelButton}
          </button>
        )}
      </label>
      <input
        data-testid="uiinput"
        value={value}
        onChange={onChangeHandler}
        className={clsx(styles.input, inputClassName)}
        {...props}
      />
    </div>
  );
};
