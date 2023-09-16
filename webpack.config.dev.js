import path from "path";
import config from "./webpack.common.js";
import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import HtmlWebpackInjector from "html-webpack-injector";

const output = merge(config, {
	mode: "development",
	devtool: "eval",
	plugins: [
		new HtmlWebpackPlugin({
			title: "React App",
			template: "./public/index.html",
			inject: true,
		}),
		new HtmlWebpackInjector(),
	],
	devServer: {
		client: {
			progress: true,
			logging: "info",
			reconnect: true,
		},
		static: {
			directory: path.join(process.cwd(), "public"),
			publicPath: "/",
		},

		port: 3000, // Port to run the development server on
		compress: true,
		hot: true,
	},
});

export default output;
