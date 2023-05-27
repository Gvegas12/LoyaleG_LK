import type { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import { buildCSSLoader } from "./loaders/buildCSSLoader";

export function buildLoaders({ isDev }: BuildOptions): Array<RuleSetRule> {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = buildCSSLoader(isDev);

  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const babelLoader: RuleSetRule = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      // options: {
      //   presets: ["@babel/preset-env"],
      //   plugins: [
      //     [
      //       "i18next-extract",
      //       {
      //         nsSeparator: AppAlias.value,
      //         locales: ["ru", "en"],
      //         keyAsDefaultValue: true,
      //       },
      //     ],
      //   ],
      // },
    },
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
