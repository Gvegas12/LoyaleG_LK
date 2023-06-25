import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import type { BuildOptions } from "./types/config";

export function buildPlugins({
  paths,
  isDev,
  project,
}: BuildOptions): Array<webpack.WebpackPluginInstance> {
  const plugins = [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API_URL__: JSON.stringify("http://localhost:5000"),
      __PROJECT__: JSON.stringify(project),
    }),
  ];

  if (isDev) {
    const pluginsForDevMode = [
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
      new ReactRefreshWebpackPlugin(),
    ];
    plugins.push(...pluginsForDevMode);
  }

  return plugins;
}
