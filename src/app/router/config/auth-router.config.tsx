import { RouteProps } from "react-router-dom";

import { AuthRoutesEnum, authRoutePaths } from "@/shared/config/routes";

import MainPage from "@/pages/MainPage";
import Telegram from "@/pages/Telegram";
import EstablishmentsPage from "@/pages/EstablishmentsPage";
import CustomersPage from "@/pages/CustomersPage";
import CustomerPage from "@/pages/CustomerPage";
import SettingsPage from "@/pages/SettingsPage";
import UsersPage from "@/pages/UsersPage";

export const authRouteConfig: Record<AuthRoutesEnum, RouteProps> = {
  [AuthRoutesEnum.HOME]: {
    index: true,
    element: <MainPage />,
  },
  [AuthRoutesEnum.CUSTOMER]: {
    path: authRoutePaths.customer,
    element: <CustomerPage />,
  },
  [AuthRoutesEnum.USERS]: {
    path: authRoutePaths.users,
    element: <UsersPage />,
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
    element: <SettingsPage />,
  },
  [AuthRoutesEnum.SETTINGS]: {
    path: authRoutePaths.settings,
    element: <SettingsPage />,
  },
  [AuthRoutesEnum.SUPPORT]: {
    path: authRoutePaths.support,
    element: <SettingsPage />,
  },
  [AuthRoutesEnum.TELEGRAM]: {
    path: authRoutePaths.telegram,
    element: <Telegram />,
  },
  [AuthRoutesEnum.ABOUT]: {
    path: authRoutePaths.about,
    element: <SettingsPage />,
  },
};
