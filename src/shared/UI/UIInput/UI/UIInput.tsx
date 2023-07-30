/* eslint-disable jsx-a11y/label-has-associated-control */ // TODO
import { HTMLProps, useEffect, useState } from "react";
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import clsx from "clsx";

import { IUILabelProps, UILabel } from "../../UILabel";

import styles from "./UIInput.module.scss";

type UIInputSizes = "small" | "medium" | "large" | "fullwidth";

type HTMLInputProps = Omit<HTMLProps<HTMLInputElement>, "size">;

interface IUIInputComponentProps extends HTMLInputProps {
  required?: boolean;
  size?: UIInputSizes;
  inputClassName?: string;
  labelProps?: Omit<IUILabelProps, "children">;
  label?: string;
  error?: string | null;
}

// prettier-ignore
interface IUIInputProps<Values extends FieldValues> extends IUIInputComponentProps {
  controller?: UseControllerProps<Values>;
}

export type InputType<Values extends FieldValues> = IUIInputProps<Values>;

export const UIInput = <Values extends FieldValues>({
  className,
  size = "medium",
  required,
  inputClassName,
  labelProps,
  label,
  type = "text",
  controller,
  error,
  ...props
}: IUIInputProps<Values>) => {
  const { field, fieldState } = useController<Values>(controller);
  const [errorMessage, setErrorMessage] = useState<string | null>();

  useEffect(() => {
    setErrorMessage(fieldState.error?.message || error);
  }, [error, fieldState.error?.message]);

  return (
    <div className={clsx(styles.UIInput, styles[size], className)}>
      {label && (
        <UILabel required={required} {...labelProps}>
          {label}
        </UILabel>
      )}
      <input
        {...field}
        {...props}
        value={field.value || ""}
        type={type}
        data-testid="uiinput"
        className={clsx(styles.input, "focus--primary", inputClassName)}
      />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};
