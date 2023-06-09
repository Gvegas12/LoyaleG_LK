type OnClickEventArgs<T> = {
  event: React.MouseEvent<HTMLElement>;
  selectedItemData: T;
};
type OnClickItemEvent<T> = {
  event: (args: OnClickEventArgs<T>) => void;
};

type TdType = object;
type ThType = string;

interface IUITableProps {
  omit?: string[];
  className?: string;
  head?: ThType[];
  body: TdType[];
  onClickItem?: OnClickItemEvent<TdType>["event"];
}
type TableData = Pick<IUITableProps, "head" | "body">;

export type {
  IUITableProps,
  TableData,
  OnClickEventArgs,
  OnClickItemEvent,
  TdType,
  ThType,
};
