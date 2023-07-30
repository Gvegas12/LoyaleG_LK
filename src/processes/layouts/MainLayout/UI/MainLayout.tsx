import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { Sidebar } from "@/widgets/Sidebar";
import { MainLayoutWrapper } from "./_MainLayoutWrapper";
import { UserService } from "@/entities/user";

import styles from "./MainLayout.module.scss";

export const MainLayout: React.FC = () => {
  React.useEffect(() => {
    UserService.getAllAdminAuthCode().catch(console.log);
    UserService.ConnectGetAllAdminAuthCodes().catch(console.log);
  }, []);

  return (
    <MainLayoutWrapper>
      <main className={styles.contentPage}>
        <Sidebar />
        <div className={styles.pageWrapper}>
          <Navbar />
          <Outlet />
        </div>
      </main>
      <Footer />
    </MainLayoutWrapper>
  );
};
