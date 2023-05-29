/* eslint-disable function-paren-newline */
import React from "react";
import type { IUITableProps } from "../../../types";

import styles from "../../UITable.module.scss";

type IUITableTbodyProps = Pick<IUITableProps, "tbody" | "omit" | "onClickTd">;

const UITableTbody: React.FC<IUITableTbodyProps> = ({
  tbody,
  omit,
  onClickTd,
}) => (
  <div className={styles.tbody}>
    {tbody
      .map((item) =>
        Object.fromEntries(
          Object.entries(item).filter((kv) => {
            /* Если в omit есть ключ с названием совпадающим с tbody item,
                то исключить его из рендера (не мутируя исходный массив) */
            if (!new Set(omit).has(kv[0])) return item;
          })
        )
      )
      .map((resultItem, i) => (
        <div key={i} className={styles.tr}>
          {Object.entries(resultItem).map((kv, index) => (
            <div
              key={kv[1] === "id" ? kv[0] : index}
              onClick={(event): void =>
                onClickTd({
                  event,
                  selectedItemData: tbody[i],
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

export default UITableTbody;
