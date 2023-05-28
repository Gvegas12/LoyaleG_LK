/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import clsx from "clsx";
import { UITriangle } from "../../UITriangle";
import { UILabel, IUILabelProps } from "../../UILabel";

import styles from "./UISelect.module.scss";

export type UISelectOptionType = {
  id: number;
  text: string;
};

type UISelectType = "default" | "small";
export interface IUISelectProps {
  className?: string;
  options: Array<UISelectOptionType>;
  type?: UISelectType;
  label?: IUILabelProps;
  fullwidth?: boolean;
  currentSelectedOption?: (item: any) => void;
}

export const UISelect: React.FC<IUISelectProps> = ({
  className,
  options,
  type = "medium",
  label,
  fullwidth,
  currentSelectedOption,
}) => {
  const [toggleShow, setToggleShow] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<string>(
    options[0].text
  );

  const onToggle = (): void => {
    setToggleShow(!toggleShow);
  };

  const onSelect = (
    e: React.MouseEvent<HTMLLIElement>,
    option: UISelectOptionType
  ) => {
    setSelectedOption(e.currentTarget.innerText);
    setToggleShow(false);
    if (currentSelectedOption) {
      currentSelectedOption(option);
    }
  };

  return (
    <div
      data-testid="uiselect"
      style={{ width: fullwidth ? "100%" : "" }}
      className={clsx(styles.UISelect, styles[type], className)}
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
          {selectedOption}
          <UITriangle active={toggleShow} className={styles.triangle} />
        </div>
        {toggleShow && (
          <ul className={styles.options}>
            {options.map(({ id, text }, i) => (
              <li
                key={id}
                onClick={(e) => onSelect(e, options[i])}
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
