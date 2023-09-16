import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { merge } from "webpack-merge";
import config from "./webpack.common.js";
import HtmlWebpackInjector from "html-webpack-injector";

const output = merge(config, {
	mode: "production",
	mode: "production",
	entry: "./src/main.js", // Entry point for your application

	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(), // Minify JavaScript using Terser
		],
		splitChunks: {
			chunks: "all",
			minSize: 0,
			maxSize: 244000, // 244 KB
		},
		runtimeChunk: "single",
	},
	performance: {
		maxAssetSize: 244000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "React App",
			template: "./public/index.html",
			inject: true,
		}),
		new HtmlWebpackInjector(),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: [path.resolve(process.cwd(), "src")],
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							["@babel/preset-env", { targets: "defaults" }],
							["@babel/preset-react"],
						],
					},
				},
			},
		],
	},

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
