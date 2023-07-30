import React from "react";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";

import UI, { IUISidebarLinkListProps } from "@/shared/UI";
import { StatisticsCards } from "@/features/Statistics";
import StatisticsCard from "@/shared/UI/UIStatisticsCard";

import { authRoutePaths } from "@/shared/config/routes";

/* icons */
import CustomersIcon from "./icons/customers.svg";
import { GoodsTable } from "@/entities/goods";

import styles from "./EstablishmentItemPage.module.scss";
import {
  Establishment,
  EstablishmentsService,
} from "@/entities/establishments";

const EstablishmentItemPageLayout: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const routes = React.useMemo<IUISidebarLinkListProps>(
    () => ({
      name: "Процессы",
      data: [
        {
          IconComponent: CustomersIcon,
          link: {
            to: `${authRoutePaths.establishments}/${id}`,
            text: "Статистика",
          },
        },
        {
          IconComponent: CustomersIcon,
          link: {
            to: "goods",
            text: "Товары",
          },
        },
      ],
    }),
    [id]
  );

  return (
    <div className={styles.EstablishmentItemPage}>
      <UI.ToggleCollapseSidebar className={styles.sidebar}>
        <UI.SidebarLinkList {...routes} />
      </UI.ToggleCollapseSidebar>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

const Statistics = () => {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = React.useState<Establishment>();

  React.useEffect(() => {
    EstablishmentsService.getOne(id)
      .then((res) => setData(res))
      .catch(console.error);
  }, [id]);

  if (!data) {
    return null;
  }

  console.log(data.sales);

  return (
    <div>
      <h3 className={styles.title}>Статистика</h3>
      <p className={styles.description}>За последние 7 дней</p>
      <div className={styles.cards}>
        <StatisticsCard.Body title="Посетители">
          <StatisticsCard.MiddleChildren>
            {data.customers.length}
          </StatisticsCard.MiddleChildren>
          <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
        </StatisticsCard.Body>
        <StatisticsCard.Body title="Покупки">
          <StatisticsCard.MiddleChildren>
            {data.sales.length}
          </StatisticsCard.MiddleChildren>
          <StatisticsCard.Filter>+3,840 (26,80%)</StatisticsCard.Filter>
        </StatisticsCard.Body>
      </div>
    </div>
  );
};

const EstablishmentItemPage: React.FC = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route path="*" element={<EstablishmentItemPageLayout />}>
        <Route index element={<Statistics />} />
        <Route path="goods" element={<GoodsTable />} />
      </Route>
    </Routes>
  );
};

export default EstablishmentItemPage;
