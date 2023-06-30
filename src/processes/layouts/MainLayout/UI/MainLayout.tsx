import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { Sidebar } from "@/widgets/Sidebar";
import { publicRoutePaths } from "@/shared/config/routes";
import { AuthService, useAuthStore } from "@/entities/auth";
import { LS_ACCESS_TOKEN_NAME } from "@/shared/config/http";
import UI from "@/shared/UI";

import styles from "./MainLayout.module.scss";

export const MainLayout: React.FC = () => {
  const [inited, setInited] = React.useState(false);
  const { setIsAuth, logout } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const navigateOnLogout = React.useCallback(() => {
    logout();
    navigate(publicRoutePaths.auth, { replace: true });
    setInited(true);
  }, [logout, navigate]);

  React.useEffect(() => {
    AuthService.checkIsAuth()
      .then((data) => {
        if (!data.accessToken) {
          navigateOnLogout();
        }
        localStorage.setItem(LS_ACCESS_TOKEN_NAME, data.accessToken);
        setIsAuth(true);
        setInited(true);
      })
      .catch(() => {
        navigateOnLogout();
      });
  }, [navigateOnLogout, setIsAuth]);

  if (!inited) {
    return <UI.LoaderPage />;
  }

  return (
    <>
      <main className={styles.contentPage}>
        <Sidebar />
        <div className={styles.pageWrapper}>
          <Navbar />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
