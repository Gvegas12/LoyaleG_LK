import type { IUILabelProps } from "../../UILabel";

type OnSelectEventArgs<T> = {
  event: React.MouseEvent<HTMLElement>;
  selectedItemData: T;
};

type OnSelectItemEvent<T> = {
  event: (args: OnSelectEventArgs<T>) => void;
};

type UISelectOptionType = {
  id: number;
  text: string;
};

type UISelectColorType = "black" | "primary";
type UISelectSizeType = "small" | "medium" | "large" | "fullwidth";

interface IUISelectProps {
  options: Array<UISelectOptionType>;
  className?: string;
  size?: UISelectSizeType;
  color?: UISelectColorType;
  label?: IUILabelProps;
  fullwidth?: boolean;
  selectedOption?: (args: OnSelectEventArgs<UISelectOptionType>) => void;
}

export type {
  IUISelectProps,
  OnSelectItemEvent,
  OnSelectEventArgs,
  UISelectOptionType as SelectOptionType,
};
