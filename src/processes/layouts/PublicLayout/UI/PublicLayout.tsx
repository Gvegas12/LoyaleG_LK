import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import UI from "@/shared/UI";
import { AuthService } from "@/entities/auth";
import { authRoutePaths } from "@/shared/config/routes";

import styles from "./PublicLayout.module.scss";

export const PublicLayout: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    AuthService.checkIsAuth()
      .then(({ accessToken }) => {
        if (accessToken) {
          navigate(authRoutePaths.home);
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  return (
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
  );
};
