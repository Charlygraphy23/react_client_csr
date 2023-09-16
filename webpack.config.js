import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { merge } from "webpack-merge";
import config from "./webpack.common.js";
import HtmlWebpackInjector from "html-webpack-injector";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const output = merge(config, {
	devtool: "source-map",
	mode: "production",
	entry: "./src/main.js", // Entry point for your application

	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(), // Minify JavaScript using Terser
			new CssMinimizerPlugin(), // Minimize CSS
		],
		splitChunks: {
			chunks: "all",
			minSize: 0,
			maxSize: 244000, // 244 KB
		},
		runtimeChunk: "single",
	},
	performance: {
		hints: false,
		maxAssetSize: 244000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "React App",
			template: "./public/index.html",
			inject: true,
		}),
		new HtmlWebpackInjector(),
		// Plugin to extract CSS into separate files
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
	],
	devServer: {
		client: {
			progress: true,
			logging: "info",
			reconnect: true,
		},
		static: {
			directory: path.join(process.cwd(), "build"),
			publicPath: "/",
		},
		port: 4000, // Port to run the development server on
		hot: false,
	},
});

export default output;
