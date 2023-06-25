import { RuleSetRule } from "webpack";
import { BuildOptions } from "../types/config";

export function buildBabelLoader({ isDev }: BuildOptions): RuleSetRule {
  return {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [isDev && require.resolve("react-refresh/babel")].filter(
          Boolean
        ),
      },
    },
  };
}
