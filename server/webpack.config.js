const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

/** @type {webpack.Configuration} */
const config = {
  mode: process.env.NODE_ENV,
  target: ["node"],
  entry: path.resolve("src", "index.ts"),
  output: {
    filename: "index.js",
    path: path.resolve("dist"),
    libraryTarget: "this",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".js"],
  },
};

module.exports = config;
