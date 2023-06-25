import { RouteProps } from "react-router-dom";

import { AuthRoutesEnum, authRoutePaths } from "@/shared/config/routes";

import MainPage from "@/pages/MainPage";
import SigninPage from "@/pages/SigninPage";
import Telegram from "@/pages/Telegram";
import EstablishmentsPage from "@/pages/EstablishmentsPage";
import CustomersPage from "@/pages/CustomersPage";
import CustomerPage from "@/pages/CustomerPage";
import SettingsPage from "@/pages/SettingsPage";
import OwnersPage from "@/pages/OwnersPage";

export const authRouteConfig: Record<AuthRoutesEnum, RouteProps> = {
  [AuthRoutesEnum.HOME]: {
    index: true,
    element: <MainPage />,
  },
  [AuthRoutesEnum.CUSTOMER]: {
    path: authRoutePaths.customer,
    element: <CustomerPage />,
  },
  [AuthRoutesEnum.OWNERS]: {
    path: authRoutePaths.owners,
    element: <OwnersPage />,
  },
  [AuthRoutesEnum.CUSTOMERS]: {
    path: authRoutePaths.customers,
    element: <CustomersPage />,
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
    element: <SettingsPage />,
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
