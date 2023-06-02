/* eslint-disable function-paren-newline */
import React from "react";
import type { IUITableProps } from "../../../types";

import styles from "../../UITable.module.scss";

interface IUITableBodyProps
  extends Pick<IUITableProps, "body" | "omit" | "onClickItem"> {
  _trStyles: object;
}

const UITableBody: React.FC<IUITableBodyProps> = ({
  body,
  omit,
  onClickItem,
  _trStyles,
}) => (
  <div className={styles.body}>
    {body
      .map((item) =>
        Object.fromEntries(
          Object.entries(item).filter((kv) => {
            /* Если в omit есть ключ с названием совпадающим с body item,
                то исключить его из рендера (не мутируя исходный массив) */
            if (!new Set(omit).has(kv[0])) return item;
          })
        )
      )
      .map((resultItem, i) => (
        <div style={_trStyles} key={i} className={styles.tr}>
          {Object.entries(resultItem).map((kv, index) => (
            <div
              key={kv[1] === "id" ? kv[0] : index}
              onClick={(event): void =>
                onClickItem({
                  event,
                  selectedItemData: body[i],
                })
              }
            >
              {kv[1]}
            </div>
          ))}
        </div>
      ))}
  </div>
);

export default UITableBody;
