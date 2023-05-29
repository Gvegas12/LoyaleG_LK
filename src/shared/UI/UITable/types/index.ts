export type OnClickEventArgs<T> = {
  event: React.MouseEvent<HTMLElement>;
  selectedItemData: T;
};
export type OnClickTDEvent<T> = {
  event: (args: OnClickEventArgs<T>) => void;
};

export type TdType = object;
export type ThType = string;

export interface IUITableProps {
  omit?: string[];
  className?: string;
  thead?: ThType[];
  tbody: TdType[];
  onClickTd?: OnClickTDEvent<TdType>["event"];
}
export type TableData = Pick<IUITableProps, "thead" | "tbody">;
