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

/**
 * Переменная является **true**, если webpack запущен в dev mode
 *
 * Переменная обьявлена **<root>/config/build/buildPlugins.ts**
 * в плагине **webpack.DefinePlugin**
 */
declare const __IS_DEV__: boolean;
/**
 * Переменная обьявлена **<root>/config/build/buildPlugins.ts**
 * в плагине **webpack.DefinePlugin**
 * @example http://localhost:5000/api
 */
declare const __API_URL__: string;
