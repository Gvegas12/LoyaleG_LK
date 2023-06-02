export type OnClickEventArgs<T> = {
  event: React.MouseEvent<HTMLElement>;
  selectedItemData: T;
};
export type onClickItemEvent<T> = {
  event: (args: OnClickEventArgs<T>) => void;
};

export type TdType = object;
export type ThType = string;

export interface IUITableProps {
  omit?: string[];
  className?: string;
  head?: ThType[];
  body: TdType[];
  onClickItem?: onClickItemEvent<TdType>["event"];
}
export type TableData = Pick<IUITableProps, "head" | "body">;
