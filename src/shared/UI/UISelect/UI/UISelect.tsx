/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import clsx from "clsx";
import { UITriangle } from "../../UITriangle";
import { UILabel } from "../../UILabel";
import type { IUISelectProps, SelectOptionType } from "../types";

import styles from "./UISelect.module.scss";

const UISelect: React.FC<IUISelectProps> = ({
  className,
  options,
  size = "medium",
  label,
  color,
  fullwidth,
  selectedOption: selectedOptionFromProps,
}) => {
  const [toggleShow, setToggleShow] = React.useState<boolean>(false);
  const [_selectedOption, setSelectedOption] = React.useState<string>(
    options[0].text
  );

  const onToggle = (): void => {
    setToggleShow(!toggleShow);
  };

  const onSelect = (
    event: React.MouseEvent<HTMLLIElement>,
    option: SelectOptionType
  ): void => {
    setSelectedOption(event.currentTarget.innerText);
    setToggleShow(false);
    if (selectedOptionFromProps) {
      selectedOptionFromProps({ event, selectedItemData: option });
    }
  };

  return (
    <div
      data-testid="uiselect"
      style={{ width: fullwidth ? "100%" : "" }}
      className={clsx(styles.UISelect, styles[size], styles[color], className)}
    >
      {label && <UILabel {...label} />}
      <div className={styles.wrapper}>
        <div
          onClick={onToggle}
          className={clsx(
            styles.viewValue,
            toggleShow && styles.active,
            "focus--primary"
          )}
        >
          {_selectedOption}
          <UITriangle active={toggleShow} className={styles.triangle} />
        </div>
        {toggleShow && (
          <ul className={styles.options}>
            {options.map(({ id, text }, i) => (
              <li
                key={id}
                onClick={(e): void => onSelect(e, options[i])}
                className={styles.option}
              >
                {text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export { UISelect as Select };
