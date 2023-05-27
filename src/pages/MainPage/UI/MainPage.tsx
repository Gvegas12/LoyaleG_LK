import React from "react";
import { useTranslation } from "react-i18next";
import { Statistics } from "@/features/Statistics";

import styles from "./MainPage.module.scss";

const MainPage: React.FC = () => {
  const { t } = useTranslation("main");

  const [value, setValue] = React.useState<string>("");

  const onChangeHandler = (val: string): void => {
    setValue(val);
  };

  return (
    <div className="page-mt">
      <Statistics />
    </div>
  );
};

export default MainPage;
