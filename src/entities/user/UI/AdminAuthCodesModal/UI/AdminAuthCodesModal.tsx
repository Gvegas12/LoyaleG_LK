import React from "react";

import UI from "@/shared/UI";
import { BotApiAuthData } from "@/entities/user/model/types";

import styles from "./AdminAuthCodesModal.module.scss";

interface IAdminAuthCodesModalProps {
  isOpen: boolean;
  onClose: () => void;
  authCodeData: BotApiAuthData[];
}

export const AdminAuthCodesModal: React.FC<IAdminAuthCodesModalProps> = ({
  isOpen,
  onClose,
  authCodeData,
}) => (
  <UI.Modal isOpen={isOpen} onClose={onClose}>
    <UI.Table body={authCodeData} />
  </UI.Modal>
);
