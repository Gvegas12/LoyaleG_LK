import React from "react";
import clsx from "clsx";

import { useUserStore } from "@/entities/user";
import { authRoutePaths } from "@/shared/config/routes";
import UI, { IUISidebarLinkListProps } from "@/shared/UI";

/* icons */
import DashboardIcon from "./icons/dashboard.svg";
import TelegramIcon from "./icons/telegram.svg";
import EstablishmentsIcon from "./icons/establishments.svg";
import CustomersIcon from "./icons/customers.svg";
import SettingsIcon from "./icons/settings.svg";
import SupportIcon from "./icons/support.svg";
import AboutUsIcon from "./icons/about.svg";

import styles from "./Sidebar.module.scss";

export interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  const { authCodeData } = useUserStore((state) => state);

  const mainMenuLinksData: IUISidebarLinkListProps = {
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

  const processesLinksData: IUISidebarLinkListProps = {
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
      {
        IconComponent: CustomersIcon,
        link: {
          text: "Владельцы",
          to: authRoutePaths.users,
        },
      },
      {
        IconComponent: CustomersIcon,
        link: {
          text: "Администраторы",
          to: authRoutePaths.admins,
        },
        badge: authCodeData.length,
      },
    ],
  };

  const optionsLinksData: IUISidebarLinkListProps = {
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
        <UI.SidebarLinkList {...mainMenuLinksData} />
        <UI.SidebarLinkList {...processesLinksData} />
        <UI.SidebarLinkList {...optionsLinksData} />
        <UI.ThemeSwitcher />
      </div>
    </div>
  );
};
