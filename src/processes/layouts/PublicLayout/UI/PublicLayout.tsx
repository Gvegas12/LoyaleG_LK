import React from "react";
import { Outlet } from "react-router-dom";

import UI from "@/shared/UI";
import { PublicLayoutWrapper } from "./_PublicLayoutWrapper";

import styles from "./PublicLayout.module.scss";

export const PublicLayout: React.FC = () => (
  <PublicLayoutWrapper>
    <main className={styles.PublicLayout}>
      <div className={styles.container}>
        <div className={styles.header}>
          <UI.Logo />
          <UI.ThemeSwitcher className={styles.ThemeSwitcher} />
        </div>
        <div className={styles.pageWrapper}>
          <Outlet />
        </div>
      </div>
    </main>
  </PublicLayoutWrapper>
);
