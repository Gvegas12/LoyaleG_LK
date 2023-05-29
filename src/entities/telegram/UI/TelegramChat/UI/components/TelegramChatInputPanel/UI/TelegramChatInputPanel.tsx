import React from "react";
import { useChangeSVGTheme } from "@/shared/hooks/useChangeSVGTheme";

import SendIcon from "./icons/send.svg";
import SmilesIcon from "./icons/smiles.svg";
import UploadFileIcon from "./icons/paperclip.svg";

import styles from "./TelegramChatInputPanel.module.scss";

export const TelegramChatInputPanel: React.FC = () => {
  useChangeSVGTheme();

  const txRef = React.useRef<HTMLTextAreaElement>(null);
  const [txValue, setTxValue] = React.useState<string>("");

  const onChangeTX = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTxValue(e.target.value);
  };

  // React.useEffect(() => {
  //   const selectionStart = txRef.current?.selectionStart;
  //   if (selectedEmoji !== "" || selectionStart) {
  //     setTxValue((prevState) => {
  //       const start = prevState.slice(0, selectionStart);
  //       const end = prevState.slice(selectionStart);
  //       return start + selectedEmoji + end;
  //     });
  //     setSelectedEmoji("");
  //   }
  // }, [selectedEmoji]);

  React.useLayoutEffect(() => {
    if (txRef.current) {
      // Сбросить высоту - важно уменьшить при удалении
      txRef.current.style.height = "inherit";
      // Установить высоту
      txRef.current.style.height = `${txRef.current.scrollHeight}px`;
    }
  }, [txValue]);

  return (
    <div className={styles.TelegramChatInputPanel}>
      <UploadFileIcon />
      <textarea
        className={styles.textarea}
        ref={txRef}
        onChange={onChangeTX}
        value={txValue}
        onKeyDown={(e): void => {
          if (e.key === "Enter") {
            setTxValue((prevState) => {
              const start = prevState.slice(0, txValue.length);
              const end = prevState.slice(txValue.length);
              return `${start}\r\n${end}`;
            });
          }
        }}
      />
      <SmilesIcon />
      <SendIcon />
    </div>
  );
};
