import React from "react";
import { createPortal } from "react-dom";

interface IUIPortalProps {
  children: React.ReactNode;
  element?: HTMLElement;
}

export const UIPortal: React.FC<IUIPortalProps> = ({
  children,
  element = document.body,
}) => createPortal(children, element);
