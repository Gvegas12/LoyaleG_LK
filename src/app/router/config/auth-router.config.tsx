import { RouteProps } from "react-router-dom";

import { AuthRoutesEnum, authRoutePaths } from "@/shared/config/routes";

import MainPage from "@/pages/MainPage";
import SigninPage from "@/pages/SigninPage";
import Telegram from "@/pages/Telegram";
import EstablishmentsPage from "@/pages/EstablishmentsPage";

export const authRouteConfig: Record<AuthRoutesEnum, RouteProps> = {
  [AuthRoutesEnum.HOME]: {
    index: true,
    element: <MainPage />,
  },
  [AuthRoutesEnum.CUSTOMER]: {
    path: authRoutePaths.customer,
    element: <SigninPage />,
  },
  [AuthRoutesEnum.CUSTOMERS]: {
    path: authRoutePaths.customers,
    element: <SigninPage />,
  },
  [AuthRoutesEnum.ESTABLISHMENTS]: {
    path: authRoutePaths.establishments,
    element: <EstablishmentsPage />,
  },
  [AuthRoutesEnum.ESTABLISHMENT_ITEM]: {
    path: authRoutePaths.establishment_item,
    element: <SigninPage />,
  },
  [AuthRoutesEnum.SETTINGS]: {
    path: authRoutePaths.settings,
    element: <SigninPage />,
  },
  [AuthRoutesEnum.SUPPORT]: {
    path: authRoutePaths.support,
    element: <SigninPage />,
  },
  [AuthRoutesEnum.TELEGRAM]: {
    path: authRoutePaths.telegram,
    element: <Telegram />,
  },
  [AuthRoutesEnum.ABOUT]: {
    path: authRoutePaths.about,
    element: <SigninPage />,
  },
};
