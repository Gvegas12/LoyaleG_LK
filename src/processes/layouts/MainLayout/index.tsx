import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Sidebar } from "@/widgets/Sidebar";

const MainLayout: React.FC = () => (
  <>
    <Header />
    <main className="content-page">
      <Sidebar />
      <div className="page-wrapper">
        <Outlet />
      </div>
    </main>
    <Footer />
  </>
);

export default MainLayout;
