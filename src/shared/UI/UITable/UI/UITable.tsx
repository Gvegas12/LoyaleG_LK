import React from "react";
import clsx from "clsx";

import styles from "./UITable.module.scss";

const getTheadKeys = (tbody: object[]): string[] => {
  const result: string[] = [];
  const set = new Set<string>();

  tbody.map((item) => Object.keys(item).map((k) => set.add(k)));
  set.forEach((item) => result.push(item));

  return result;
};

export interface IUITableProps {
  className?: string;
  thead?: string[];
  tbody: object[];
}

export const UITable: React.FC<IUITableProps> = ({
  className,
  thead,
  tbody,
}) => {
  const theadResult: string[] = thead || getTheadKeys(tbody);

  return (
    <div data-testid="uitable" className={clsx(styles.UITable, className)}>
      <div className={clsx(styles.tr, styles.thead)}>
        {theadResult.map((k) => (
          <div
            className={clsx(!thead && styles.firstLetterToUppercase)}
            key={k}
          >
            {k}
          </div>
        ))}
      </div>
      <div className={styles.tbody}>
        {tbody.map((item, index) => (
          <div key={index} className={styles.tr}>
            {Object.values(item).map((v, i) => (
              <div key={i}>{v}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
