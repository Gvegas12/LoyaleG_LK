import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import type { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): Array<webpack.WebpackPluginInstance> {
  const plugins = [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];

  const pluginsForDevMode = [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];

  if (isDev) {
    plugins.push(...pluginsForDevMode);
  }

  return plugins;
}
