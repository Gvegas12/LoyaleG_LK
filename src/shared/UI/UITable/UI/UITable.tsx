import React from "react";
import clsx from "clsx";

import UITableBody from "./components/UITableBody";

import { getTableHeadKeys } from "./helpers/getTableHeadKeys";
import { useUITableHeadOmit } from "./hooks/useUITableHeadOmit";
import type { IUITableProps, TableData } from "../types";

import styles from "./UITable.module.scss";
import { UIButton } from "../../UIButton";

const UITable: React.FC<IUITableProps> = ({
  omit,
  className,
  head,
  body,
  onClickItem,
  trClassName,
  trStyles: trStylesProp,
  button,
}) => {
  const [tableData, setTableData] = React.useState<TableData>({
    body,
    head: head || getTableHeadKeys(body),
  });

  useUITableHeadOmit({ omit, setTableData });

  const trStyles = {
    gridTemplateColumns: `repeat(${tableData.head.length}, 1fr)`,
  };

  return (
    <div data-testid="uitable" className={clsx(styles.UITable, className)}>
      <div style={trStyles} className={clsx(styles.tr, styles.head)}>
        {tableData.head.map((k) => (
          <div className={clsx(!head && styles.firstLetterToUppercase)} key={k}>
            {k}
          </div>
        ))}
      </div>
      <UITableBody
        _trStyles={{ ...trStyles, ...trStylesProp }}
        body={tableData.body}
        omit={omit}
        trClassName={trClassName}
        onClickItem={(args): void => onClickItem(args)}
      />
      {button && (
        <UIButton className={clsx(button.className, styles.btn)} {...button}>
          {button.children}
        </UIButton>
      )}
    </div>
  );
};

export { UITable as Table };
