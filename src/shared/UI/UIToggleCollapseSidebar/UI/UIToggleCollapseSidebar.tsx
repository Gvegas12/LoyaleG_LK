import React from "react";
import clsx from "clsx";
import { Transition } from "react-transition-group";

import BackIcon from "./icons/back.svg";
import { UITriangle } from "../../UITriangle";
import { useChangeSVGTheme } from "@/shared/lib/hooks";

import styles from "./UIToggleCollapseSidebar.module.scss";

const duration = 300;

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 0 },
  exiting: { opacity: 1 },
  exited: { opacity: 1 },
};

interface IUIToggleCollapseSidebarProps {
  children: React.ReactNode;
  className?: string;
}

export const UIToggleCollapseSidebar: React.FC<IUIToggleCollapseSidebarProps> =
  ({ className, children }) => {
    useChangeSVGTheme();
    const [isClose, setIsClose] = React.useState(false);
    const nodeRef = React.useRef(null);

    const onClose = (): void => {
      setIsClose(true);
    };
    const onOpen = (): void => {
      setIsClose(false);
    };

    return (
      <div
        className={clsx(
          styles.UIToggleCollapseSidebar,
          isClose && styles.close,
          className
        )}
      >
        <Transition nodeRef={nodeRef} in={isClose} timeout={duration}>
          {(state) => (
            <div
              ref={nodeRef}
              style={{
                // @ts-ignore
                ...transitionStyles[state],
              }}
              className={styles.wrapper}
            >
              <BackIcon className={styles.closeBtn} onClick={onClose} />
              <div className={styles.chats}>{children}</div>
            </div>
          )}
        </Transition>
        <button onClick={onOpen} className={styles.openBtn}>
          <UITriangle
            className={clsx(styles.triangle, isClose && styles.close)}
          />
        </button>
      </div>
    );
  };
