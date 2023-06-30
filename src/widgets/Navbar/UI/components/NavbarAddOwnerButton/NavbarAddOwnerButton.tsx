import React from "react";

import UI from "@/shared/UI";

export const NavbarAddOwnerButton: React.FC = React.memo(() => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const onClose = () => {
    setModalIsOpen(false);
  };
  const onOpen = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      <UI.Button onClick={onOpen} size="large">
        Добавить владельца
      </UI.Button>
      {/* <UsersTable /> */}
    </>
  );
});
