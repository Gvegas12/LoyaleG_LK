declare module "*.scss" {
  type IClassNames = Record<string, string>;
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  import type React from "react";

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

// eslint-disable-next-line no-underscore-dangle
declare const __IS_DEV__: boolean;
