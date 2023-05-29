import React from "react";
import clsx from "clsx";

import UITableTbody from "./components/UITableTbody";

import { getTheadKeys } from "./helpers/getTheadKeys";
import { useUITableTheadOmit } from "./hooks/useUITableTheadOmit";
import type { IUITableProps, TableData } from "../types";

import styles from "./UITable.module.scss";

export const UITable: React.FC<IUITableProps> = ({
  omit,
  className,
  thead,
  tbody,
  onClickTd,
}) => {
  const [tableData, setTableData] = React.useState<TableData>({
    tbody,
    thead: thead || getTheadKeys(tbody),
  });

  useUITableTheadOmit({ omit, setTableData });

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
        <UITableTbody
          tbody={tableData.tbody}
          omit={omit}
          onClickTd={(args): void => onClickTd(args)}
        />
      </div>
    </div>
  );
};
