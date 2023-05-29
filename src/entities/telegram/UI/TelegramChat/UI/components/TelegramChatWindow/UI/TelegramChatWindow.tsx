import React from "react";

import styles from "./TelegramChatWindow.module.scss";

interface ITelegramChatWindowProps {
  messages: Array<string>;
}

export const TelegramChatWindow: React.FC<ITelegramChatWindowProps> = ({
  messages,
}) => (
  <div className={styles.TelegramChatWindow}>
    <ul className={styles.messages}>
      {messages.map((message, i) => (
        <div key={i} className={styles.message}>
          <span className={styles.messageText}>{message}</span>
        </div>
      ))}
    </ul>
  </div>
);
