/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import clsx from "clsx";
import { UseFormRegister } from "react-hook-form";

import styles from "./UICheckbox.module.scss";

interface IUICheckboxProps {
  className?: string;
  type?: "checkbox" | "radio";
  value: string | number | null;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IUIInputCheckboxProps extends IUICheckboxProps {
  register?: UseFormRegister<any>;
}

export const UICheckbox: React.FC<IUIInputCheckboxProps> = ({
  className,
  type = "checkbox",
  register,
  value,
  name,
  checked,
  onChange,
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    register(name).onChange(e);
  };

  return (
    <div
      data-testid="UICheckbox"
      className={clsx(styles.UICheckbox, className)}
    >
      <label
        className={clsx(styles.label, checked && styles.isChecked)}
        htmlFor={name}
      />
      <input
        {...register(name, { required: true })}
        name={name}
        className={clsx(styles.input, checked && styles.isChecked)}
        type={type}
        checked={checked}
        onChange={onChangeHandler}
        value={value}
      />
    </div>
  );
};
