import React from "react";
import { Routes, Route } from "react-router-dom";

import { authRouteConfig, publicRouteConfig } from "./config";
import { authRoutePaths } from "@/shared/config/routes";
import MainLayout from "@/processes/layouts/MainLayout";

const AppRouter: React.FC = () => (
  <Routes>
    {/*  isAuth |  */}
    {/*         |  */}
    {/*        \|/ */}
    <Route path={authRoutePaths.home} element={<MainLayout />}>
      {Object.values(authRouteConfig).map(({ path, element, index }, i) => (
        <Route
          key={i}
          path={path}
          index={index}
          element={
            <React.Suspense fallback={<div>Loading</div>}>
              {element}
            </React.Suspense>
          }
        />
      ))}
    </Route>

    {Object.values(publicRouteConfig).map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={
          <React.Suspense fallback={<div>Loading</div>}>
            {element}
          </React.Suspense>
        }
      />
    ))}
  </Routes>
);

export default AppRouter;
