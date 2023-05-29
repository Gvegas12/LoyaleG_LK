import React from "react";
import clsx from "clsx";

import styles from "./TelegramChatItem.module.scss";

interface ITelegramChatItemProps {
  name: string;
  place: string;
  lastMessage?: string;
  avatar?: React.ReactSVGElement;
}

export const TelegramChatItem: React.FC<ITelegramChatItemProps> = ({
  place,
  name,
  avatar,
  lastMessage,
}) => (
  <div className={styles.TelegramChatItem}>
    {avatar ? (
      <div className={styles.avatar}>{avatar}</div>
    ) : (
      <div className={clsx(styles.avatar, styles.mockAvatar)} />
    )}
    <div className={styles.wrapper}>
      <p className={styles.name}>{name}</p>
      <p className={styles.place}>{place}</p>
      <p className={styles.lastMessage}>{lastMessage}</p>
    </div>
    <p className={styles.time}>21:10</p>
  </div>
);
