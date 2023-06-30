import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { BuildOptions } from "./types/config";

export function buildDevServer({
  port,
  apiUrl,
}: BuildOptions): DevServerConfiguration {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
    proxy: {
      [`${apiUrl.apiRootPath}/**`]: {
        target: apiUrl.target,
        changeOrigin: true,
      },
    },
  };
}
