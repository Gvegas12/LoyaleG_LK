import React from "react";
import clsx from "clsx";

import UI from "@/shared/UI";
import { authRoutePaths } from "@/shared/config/routes";
import { SidebarLinks } from "./components/SidebarLinks";
import type { ISidebarLinkProps } from "./components/SidebarLink";

import styles from "./Sidebar.module.scss";

/* icons */
import DashboardIcon from "./icons/dashboard.svg";
import TelegramIcon from "./icons/telegram.svg";
import EstablishmentsIcon from "./icons/establishments.svg";
import CustomersIcon from "./icons/customers.svg";
import SettingsIcon from "./icons/settings.svg";
import SupportIcon from "./icons/support.svg";
import AboutUsIcon from "./icons/about.svg";

export interface ISidebarProps {
  className?: string;
}

type LinksDataType = {
  name: string;
  data: Array<ISidebarLinkProps>;
};

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  const mainMenuLinksData: LinksDataType = {
    name: "Главное меню",
    data: [
      {
        IconComponent: DashboardIcon,
        link: {
          text: "Панель управления",
          to: authRoutePaths.home,
        },
      },
      {
        IconComponent: TelegramIcon,
        link: {
          text: "Telegam",
          to: authRoutePaths.telegram,
        },
      },
    ],
  };

  const processesLinksData: LinksDataType = {
    name: "Процессы",
    data: [
      {
        IconComponent: EstablishmentsIcon,
        link: {
          text: "Торговые точки",
          to: authRoutePaths.establishments,
        },
      },
      {
        IconComponent: CustomersIcon,
        link: {
          text: "Покупатели",
          to: authRoutePaths.customers,
        },
      },
    ],
  };

  const optionsLinksData: LinksDataType = {
    name: "Опции",
    data: [
      {
        IconComponent: SettingsIcon,
        link: {
          text: "Настройки",
          to: authRoutePaths.settings,
        },
      },
      {
        IconComponent: SupportIcon,
        link: {
          text: "Служба поддержки",
          to: authRoutePaths.support,
        },
      },
      {
        IconComponent: AboutUsIcon,
        link: {
          text: "О нас",
          to: authRoutePaths.about,
        },
      },
    ],
  };

  return (
    <div data-testid="sidebar" className={clsx(styles.Sidebar, className)}>
      <UI.Logo />
      <div className={styles.wrapper}>
        <SidebarLinks {...mainMenuLinksData} />
        <SidebarLinks {...processesLinksData} />
        <SidebarLinks {...optionsLinksData} />
        <UI.ThemeSwitcher />
      </div>
    </div>
  );
};
