import React from "react";
import { Routes, Route } from "react-router-dom";

import { authRouteConfig, publicRouteConfig } from "../config";
import { authRoutePaths, publicRoutePaths } from "@/shared/config/routes";
import { MainLayout } from "@/processes/layouts/MainLayout";
import { PublicLayout } from "@/processes/layouts/PublicLayout";
import { ProtectedRoutesWrapper } from "./ProtectedRoutesWrapper";
import UI from "@/shared/UI";

const AppRouter: React.FC = () => (
  <Routes>
    <Route path={authRoutePaths.home} element={<MainLayout />}>
      {Object.values(authRouteConfig).map(({ path, element, index }, i) => (
        <Route
          key={i}
          path={path}
          index={index}
          element={
            <React.Suspense fallback={<UI.LoaderPage />}>
              <ProtectedRoutesWrapper>{element}</ProtectedRoutesWrapper>
            </React.Suspense>
          }
        />
      ))}
    </Route>

    <Route path={publicRoutePaths.auth} element={<PublicLayout />}>
      {Object.values(publicRouteConfig).map(({ path, element, index }, i) => (
        <Route
          key={i}
          index={index}
          path={path}
          element={
            <React.Suspense fallback={<UI.LoaderPage />}>
              {element}
            </React.Suspense>
          }
        />
      ))}
    </Route>
  </Routes>
);

export default AppRouter;
