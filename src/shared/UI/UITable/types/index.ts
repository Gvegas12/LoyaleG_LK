export type OnClickEventArgs<T> = {
  event: React.MouseEvent<HTMLElement>;
  selectedItemData: T;
};
export type OnClickTDEvent<T> = {
  event: (args: OnClickEventArgs<T>) => void;
};

export type TbodyType = object;
export type TheadType = string;

export interface IUITableProps {
  omit?: string[];
  className?: string;
  thead?: TheadType[];
  tbody: TbodyType[];
  onClickTD?: OnClickTDEvent<TbodyType>["event"];
}
export type TableData = Pick<IUITableProps, "thead" | "tbody">;
