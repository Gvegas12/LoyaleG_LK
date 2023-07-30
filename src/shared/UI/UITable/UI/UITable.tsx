import React from "react";
import clsx from "clsx";

import UITableBody from "./components/UITableBody";

import { getTableHeadKeys } from "./helpers/getTableHeadKeys";
import type { IUITableProps, TableData } from "../types";

import styles from "./UITable.module.scss";
import { UIButton } from "../../UIButton";

const UITable: React.FC<IUITableProps> = ({
  omit,
  className,
  head = [],
  body,
  onClickItem,
  trClassName,
  trStyles: trStylesProp,
  button,
}) => {
  const [tableData, setTableData] = React.useState<TableData>({
    head: head.length ? head : getTableHeadKeys(body),
    body,
  });

  React.useEffect(() => {
    setTableData((prev) => ({
      ...prev,
      body,
    }));
  }, [body]);

  React.useEffect(() => {
    if (omit?.length) {
      setTableData((prev) => ({
        ...prev,
        head: prev?.head?.filter(
          (headItem) => !new Set(omit).has(headItem) && headItem
        ),
      }));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [omit]);

  console.log(tableData);

  return (
    <div data-testid="uitable" className={clsx(styles.UITable, className)}>
      <div
        style={{ gridTemplateColumns: `repeat(${tableData.head.length}, 1fr)` }}
        className={clsx(styles.tr, styles.head)}
      >
        {tableData.head.map((k) => (
          <div
            className={clsx(!head.length && styles.firstLetterToUppercase)}
            key={k}
          >
            {k}
          </div>
        ))}
      </div>
      <UITableBody
        _trStyles={{
          gridTemplateColumns: `repeat(${tableData.head.length}, 1fr)`,
          ...trStylesProp,
        }}
        body={tableData.body}
        omit={omit}
        trClassName={trClassName}
        onClickItem={(args) => onClickItem?.(args)}
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
