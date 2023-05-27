import type { ResolveOptions } from "webpack";
import { AppAlias, BuildOptions } from "./types/config";

export function buildResolvers({ paths }: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      [AppAlias.value]: paths.src,
    },
  };
}
