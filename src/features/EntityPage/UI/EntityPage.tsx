import React from "react";
import clsx from "clsx";

import UI from "@/shared/UI";
import type { EntityPageItemType } from "../types";

import styles from "./EntityPage.module.scss";

export interface IEntityPageProps {
  className?: string;
  data: Array<EntityPageItemType>;
}

export const EntityPage: React.FC<IEntityPageProps> = ({ className, data }) => {
  const [navItems, setNavItems] = React.useState<Array<string>>();
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  React.useEffect(() => {
    setNavItems(() => data.map(({ navItem }) => navItem));
  }, [data]);

  const { Component } = data[selectedIndex];

  return (
    <div className={clsx(styles.EntityPage, className)}>
      <div className={styles.nav}>
        {navItems?.map((item, i) => (
          <div
            className={clsx(
              styles.navItem,
              selectedIndex === i && styles.active,
              selectedIndex === 0 && styles.first
            )}
            onClick={(): void => setSelectedIndex(i)}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <UI.Box className={styles.body}>
        <Component />
      </UI.Box>
    </div>
  );
};
