import path from "path";
import config from "./webpack.config.js";
import { merge } from "webpack-merge";

const output = merge(config, {
	mode: "development",
	devtool: "eval",
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
