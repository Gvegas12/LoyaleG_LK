import React from "react";

/* TODO add unit test */

const changePrimaryColor = (attr: string): void => {
  document.querySelectorAll(`[${attr}="app-theme"]`).forEach((HTMLElement) => {
    HTMLElement.setAttribute(attr, "var(--primary-color)");
  });
};

export const useChangeSVGTheme = (): void => {
  React.useEffect(() => {
    changePrimaryColor("fill");
    changePrimaryColor("stroke");
  }, []);
};
