import dotenv from "dotenv";
dotenv.config();

import path from "path";
import type { Configuration } from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import type {
  BuildApiUrl,
  BuildEnv,
  BuildMode,
  BuildPaths,
} from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    favicon: path.resolve(__dirname, "public", "favicon.ico"),
  };

  const mode: BuildMode = env.mode || "development";
  const PORT = env.port || 3000;

  const isDev = mode === "development";

  const apiUrl: BuildApiUrl = {
    target: process.env.API_URL || "http://localhost:5000",
    apiRootPath: process.env.API_ROOT_PATH || "/api",
  };

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    project: "frontend",
    apiUrl,
  });

  return config;
};
