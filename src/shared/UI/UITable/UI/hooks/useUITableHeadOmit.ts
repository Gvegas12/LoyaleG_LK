import React from "react";
import type { IUITableProps, TableData } from "../../types";

interface useUITableOmitProps extends Pick<IUITableProps, "omit"> {
  setTableData: React.Dispatch<React.SetStateAction<TableData>>;
}

export const useUITableHeadOmit = ({
  omit,
  setTableData,
}: useUITableOmitProps): void => {
  React.useEffect(() => {
    if (omit?.length) {
      setTableData((prev) => ({
        ...prev,
        head: prev.head.filter(
          (headItem) => !new Set(omit).has(headItem) && headItem
        ),
      }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [omit]);
};
