import React from "react";
import { useLocation } from "react-router-dom";

import { Statistics } from "@/features/Statistics";
import {
  NavigateStateSchema,
  userAlreadyLoggedIn,
} from "@/shared/config/routes";
import UI from "@/shared/UI";
import { useOnClearLocationState } from "@/shared/lib/hooks";

const MainPage: React.FC = () => {
  const [isShowModal, setIsShowModal] = React.useState(false);
  const locationState = useLocation().state as NavigateStateSchema;
  const onClearLocationState = useOnClearLocationState();

  React.useEffect(() => {
    if (locationState?.description === userAlreadyLoggedIn?.description) {
      setIsShowModal(true);
    }
  }, [locationState?.description, onClearLocationState]);

  const onCloseModal = () => {
    setIsShowModal(false);
    onClearLocationState();
  };

  return (
    <>
      {isShowModal && (
        <UI.Modal isOpen={isShowModal} onClose={onCloseModal}>
          {userAlreadyLoggedIn.description}
        </UI.Modal>
      )}
      <Statistics />
    </>
  );
};

export default MainPage;
