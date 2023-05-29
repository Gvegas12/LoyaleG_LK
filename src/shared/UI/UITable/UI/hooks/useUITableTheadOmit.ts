import React from "react";
import type { IUITableProps, TableData } from "../../types";

interface useUITableOmitProps extends Pick<IUITableProps, "omit"> {
  setTableData: React.Dispatch<React.SetStateAction<TableData>>;
}

export const useUITableTheadOmit = ({
  omit,
  setTableData,
}: useUITableOmitProps): void => {
  React.useEffect(() => {
    if (omit?.length) {
      setTableData((prev) => ({
        ...prev,
        thead: prev.thead.filter(
          (theadItem) => !new Set(omit).has(theadItem) && theadItem
        ),
      }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [omit]);
};
