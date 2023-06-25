import React from "react";
import clsx from "clsx";

import { UIBox } from "../../UIBox";
import { UIPortal } from "../../UIPortal";

import styles from "./UIModal.module.scss";

interface IUIModalProps {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const UIModal: React.FC<IUIModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
}) => {
  const onCloseHandler = React.useCallback((): void => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const onKeyDown = React.useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        onCloseHandler();
      }
    },
    [onCloseHandler]
  );

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (!isOpen) {
    return null;
  }

  return (
    <UIPortal>
      <div className={clsx(styles.UIModal, isOpen && styles.opened)}>
        <div className={styles.overlay} onClick={onCloseHandler}>
          <UIBox className={clsx(className)} onClick={onContentClick}>
            {children}
          </UIBox>
        </div>
      </div>
    </UIPortal>
  );
};

export { UIModal as Modal, IUIModalProps };
