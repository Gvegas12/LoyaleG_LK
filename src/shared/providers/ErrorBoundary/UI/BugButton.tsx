import React from "react";
import { useTranslation } from "react-i18next";
import UI from "@/shared/UI";

const BugButton: React.FC = () => {
  const { t } = useTranslation("error");
  const [error, setError] = React.useState<boolean>(false);

  const throwError = (): void => {
    setError(true);
  };

  React.useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <UI.Button onClick={throwError}>{t("Пробросить ошибку")}</UI.Button>;
};

export default BugButton;
