import React from "react";
import { TelegramChatWindow } from "./components/TelegramChatWindow";
import { TelegramChatSidebar } from "./components/TelegramChatSidebar";
import { TelegramChatInputPanel } from "./components/TelegramChatInputPanel";

import styles from "./TelegramChat.module.scss";

const messages = ["asdasdasdasd", "asdasdasdasd"];

export const TelegramChat: React.FC = () => (
  <div data-testid="telegramchat">
    <TelegramChatSidebar />
    <div className={styles.wrapper}>
      <TelegramChatWindow messages={messages} />
      <TelegramChatInputPanel />
    </div>
  </div>
);
