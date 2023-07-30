import React from "react";
import clsx from "clsx";

import styles from "./UIButton.module.scss";
import { UITriangle } from "../../UITriangle";

type ButtonThemeType = "outline" | "fill" | "clear";
type ButtonSizeType = "small" | "medium" | "large" | "fullwidth";
type ButtonColorType = "black" | "primary";
type ButtonVariantType = "select" | "default";

export interface IUIButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSizeType;
  theme?: ButtonThemeType;
  color?: ButtonColorType;
  variant?: ButtonVariantType;
}

export const UIButton: React.FC<IUIButtonProps> = ({
  className,
  children,
  theme = "fill",
  size = "medium",
  color = "primary",
  variant = "default",
  onClick,
  type,
  ...props
}) => {
  const [showSelectBody, setShowSelectBody] = React.useState<boolean>();

  const onToggleTooltip = (): void => {
    setShowSelectBody(!showSelectBody);
  };

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (variant === "select") {
      onToggleTooltip();
    }
    if (onClick) {
      onClick(event);
    }
  };

  const classNames = clsx(
    styles.UIButton,
    styles[theme],
    styles[size],
    styles[color],
    styles[variant],
    showSelectBody && styles.selectActive,
    className
  );

  return (
    <button
      onClick={onClickHandler}
      className={classNames}
      type={type}
      {...props}
    >
      {children}
      {variant === "select" && (
        <>
          <UITriangle className={styles.triangle} active={showSelectBody} />
          {showSelectBody && <div className={styles.selectBody}>asdasdasd</div>}
        </>
      )}
    </button>
  );
};
