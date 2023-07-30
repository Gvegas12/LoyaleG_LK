import React from "react";
import clsx from "clsx";

import { UISidebarLink, IUISidebarLinkProps } from "../../UISidebarLink";

import styles from "./UISidebarLinkList.module.scss";

export interface IUISidebarLinkListProps {
  name: string;
  className?: string;
  data: Array<IUISidebarLinkProps>;
}

export const UISidebarLinkList: React.FC<IUISidebarLinkListProps> = React.memo(
  ({ data, name, className }) => (
    <div className={clsx(styles.UISidebarLinkList, className)}>
      <span className={styles.name}>{name}</span>
      <div className={styles.wrapper}>
        {data.map(({ link, ...props }) => (
          <UISidebarLink key={link.to} link={link} {...props} />
        ))}
      </div>
    </div>
  )
);
