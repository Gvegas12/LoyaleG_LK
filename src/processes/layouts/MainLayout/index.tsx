import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "@/widgets/Navbar";
import { Footer } from "@/widgets/Footer";
import { Sidebar } from "@/widgets/Sidebar";

const MainLayout: React.FC = () => (
  <>
    <main className="content-page">
      <Sidebar />
      <div className="page-wrapper">
        <Navbar />
        <Outlet />
      </div>
    </main>
    <Footer />
  </>
);

export default MainLayout;
