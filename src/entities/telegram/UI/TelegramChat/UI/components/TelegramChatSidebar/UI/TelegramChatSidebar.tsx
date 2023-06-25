import React from "react";
import clsx from "clsx";

import UI from "@/shared/UI";
import { TelegramChatItem } from "../../TelegramChatItem";
import BackIcon from "./icons/back.svg";
import { useChangeSVGTheme } from "@/shared/lib/hooks/useChangeSVGTheme";

import styles from "./TelegramChatSidebar.module.scss";

export const TelegramChatSidebar: React.FC = () => {
  useChangeSVGTheme();
  const [isClose, setIsClose] = React.useState(true);

  const onClose = (): void => {
    setIsClose(true);
  };
  const onOpen = (): void => {
    setIsClose(false);
  };

  React.useEffect(() => {
    setIsClose(false);
  }, []);

  return (
    <div className={clsx(styles.TelegramChatSidebar, isClose && styles.close)}>
      <button onClick={onOpen} className={styles.openBtn}>
        <UI.Triangle
          className={clsx(styles.triangle, isClose && styles.close)}
        />
      </button>
      <BackIcon className={styles.closeBtn} onClick={onClose} />
      <div className={styles.chats}>
        <TelegramChatItem
          name="Choize Coffee"
          place="м. Курская ул.Пролетарская д.22 стр.12"
          lastMessage="Ваш любимый ресторан сообщает: Ах, пятница! Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!"
        />
        <TelegramChatItem
          name="Choize Coffee"
          place="м. Курская ул.Пролетарская д.22 стр.12"
          lastMessage="Ваш любимый ресторан сообщает: Ах, пятница! Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!"
        />
        <TelegramChatItem
          name="Choize Coffee"
          place="м. Курская ул.Пролетарская д.22 стр.12"
          lastMessage="Ваш любимый ресторан сообщает: Ах, пятница! Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!"
        />
        <TelegramChatItem
          name="Choize Coffee"
          place="м. Курская ул.Пролетарская д.22 стр.12"
          lastMessage="Ваш любимый ресторан сообщает: Ах, пятница! Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!"
        />
        <TelegramChatItem
          name="Choize Coffee"
          place="м. Курская ул.Пролетарская д.22 стр.12"
          lastMessage="Ваш любимый ресторан сообщает: Ах, пятница! Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!Ах, пятница!"
        />
      </div>
    </div>
  );
};
