/* eslint-disable function-paren-newline */
import React from "react";
import { UISliderButton } from "../UISliderButton/UISliderButton";

import styles from "./UISliderWindow.module.scss";

interface IUISliderWindowProps {
  children: React.ReactNode;
}

const step = 100;

export const UISliderWindow: React.FC<IUISliderWindowProps> = ({
  children,
}) => {
  const [offset, setOffset] = React.useState<number>(0);
  const [sliderItems, setSliderItems] = React.useState<React.ReactNode>();
  const endCount = React.useCallback(
    (): number => React.Children.toArray(children).length,
    [children]
  );

  React.useEffect(() => {
    const CSSstyles: React.CSSProperties = {
      transform: `translateX(-${offset}%)`,
      transition: "transform 0.5s ease",
      textAlign: "center",
    };
    setSliderItems(() =>
      React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
          offset,
          style: CSSstyles,
        })
      )
    );
  }, [children, offset]);

  const isFirstItem = offset <= 0;
  const onLeft = () => {
    if (isFirstItem) {
      return;
    }
    setOffset((prevState) => (prevState -= step));
  };

  const isLastItem = offset >= endCount() * step - step;
  const onRight = () => {
    if (isLastItem) {
      return;
    }
    setOffset((prevState) => (prevState += step));
  };

  return (
    <>
      {!isFirstItem && <UISliderButton onClick={onLeft} variant="left" />}
      <div className={styles.UISliderWindow}>
        <div className={styles.items}>{sliderItems}</div>
      </div>
      {!isLastItem && <UISliderButton onClick={onRight} variant="right" />}
    </>
  );
};
