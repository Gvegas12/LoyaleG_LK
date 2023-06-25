import type { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import { buildCSSLoader } from "./loaders/buildCSSLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): Array<RuleSetRule> {
  const { isDev } = options;

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

  const fontsLoader: RuleSetRule = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: {
      outputPath: "fonts/",
      publicPath: "fonts/",
    },
  };

  const fileLoader: RuleSetRule = {
    test: /\.(png|jpe?g|gif)$/i,
    type: "asset/resource",
    generator: {
      outputPath: "img/",
      publicPath: "img/",
    },
  };

  const babelLoader = buildBabelLoader(options);

  return [
    fileLoader,
    fontsLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader,
  ];
}
