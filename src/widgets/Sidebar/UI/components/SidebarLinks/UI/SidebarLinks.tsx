import React from "react";
import clsx from "clsx";

import { SidebarLink, ISidebarLinkProps } from "../../SidebarLink";

import styles from "./SidebarLinks.module.scss";

interface ISidebarLinksProps {
  name: string;
  className?: string;
  data: Array<ISidebarLinkProps>;
}

export const SidebarLinks: React.FC<ISidebarLinksProps> = ({
  data,
  name,
  className,
}) => (
  <div className={clsx(styles.SidebarLinks, className)}>
    <span className={styles.name}>{name}</span>
    <div className={styles.wrapper}>
      {data.map(({ link, IconComponent }) => (
        <SidebarLink key={link.to} link={link} IconComponent={IconComponent} />
      ))}
    </div>
  </div>
);
