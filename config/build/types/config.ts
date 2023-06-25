export type BuildMode = "production" | "development";

export enum AppAlias {
  value = "@",
}
export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  favicon: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}

export interface BuildOptions extends BuildEnv {
  paths: BuildPaths;
  isDev: boolean;
  project: "storybook" | "jest" | "frontend";
}
