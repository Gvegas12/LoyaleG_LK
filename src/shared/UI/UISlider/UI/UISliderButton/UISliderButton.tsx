/* eslint-disable jsx-a11y/control-has-associated-label */ // TODO
import React from "react";

import ArrowIcon from "./icons/arrow_slider.svg";

import styles from "./UISliderButton.module.scss";
import { useChangeSVGTheme } from "@/shared/lib/hooks";

interface IUISliderButtonProps {
  variant: "left" | "right";
  onClick: () => void;
}

export const UISliderButton: React.FC<IUISliderButtonProps> = React.memo(
  ({ variant, onClick }) => {
    useChangeSVGTheme();

    return (
      <button
        onClick={onClick}
        className={`${styles.slider__button} ${styles[variant]}`}
      >
        <ArrowIcon />
      </button>
    );
  }
);
