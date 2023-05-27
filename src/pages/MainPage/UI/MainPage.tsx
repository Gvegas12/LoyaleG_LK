import React from "react";
import { useTranslation } from "react-i18next";

import UI from "@/shared/UI";

const MainPage: React.FC = () => {
  const { t } = useTranslation("main");

  const [value, setValue] = React.useState<string>("");

  const onChangeHandler = (val: string): void => {
    setValue(val);
  };

  return (
    <div>
      <div>{t("Главная страница")}</div>
      <UI.ThemeSwitcher />
    </div>
  );
};

export default MainPage;
