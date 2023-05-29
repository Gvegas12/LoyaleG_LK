import React from "react";
import type { IUITableProps, TableData } from "../../../types";

interface useUITableOmitProps extends Pick<IUITableProps, "omit"> {
  setTableData: React.Dispatch<React.SetStateAction<TableData>>;
}

export const useUITableOmit = ({
  omit,
  setTableData,
}: useUITableOmitProps): void => {
  React.useEffect(() => {
    if (omit?.length) {
      setTableData((prev) => ({
        tbody: prev.tbody.map((tbodyItem) => {
          omit.forEach((item: keyof typeof tbodyItem) => {
            delete tbodyItem[item];
          });
          return tbodyItem;
        }),

        thead: prev.thead.filter(
          (theadItem) => !new Set(omit).has(theadItem) && theadItem
        ),
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [omit]);
};
