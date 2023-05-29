import React from "react";
import clsx from "clsx";

import styles from "./UITable.module.scss";
import { useUITableOmit } from "./hooks/useUITableOmit";
import { getTheadKeys } from "./helpers/getTheadKeys";
import type { IUITableProps, OnClickEventArgs, TableData } from "../types";

export const UITable: React.FC<IUITableProps> = ({
  omit,
  className,
  thead,
  tbody,
  onClickTD,
}) => {
  const [tableData, setTableData] = React.useState<TableData>({
    tbody,
    thead: thead || getTheadKeys(tbody),
  });

  const onClickTDHandler = (args: OnClickEventArgs<object>): void => {
    onClickTD(args);
  };

  useUITableOmit({ omit, setTableData });

  return (
    <div data-testid="uitable" className={clsx(styles.UITable, className)}>
      <div className={clsx(styles.tr, styles.thead)}>
        {tableData.thead.map((k) => (
          <div
            className={clsx(!thead && styles.firstLetterToUppercase)}
            key={k}
          >
            {k}
          </div>
        ))}
      </div>
      <div className={styles.tbody}>
        {tableData.tbody.map((item, index) => (
          <div key={index} className={styles.tr}>
            {Object.values(item).map((v, i) => (
              <div
                onClick={(event): void =>
                  onClickTDHandler({ event, selectedItemData: item })
                }
                key={i}
              >
                {v}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
