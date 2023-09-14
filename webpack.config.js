import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
	mode: "production",
	entry: "./src/main.js", // Entry point for your application
	watchOptions: {
		ignored: ["build", "**/node_modules"],
	},
	output: {
		path: path.resolve(process.cwd(), "build"), // Output directory
		filename: "bundle.js", // Output bundle file name
		publicPath: "/",
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "React App",
			template: "./public/index.html",
			inject: false,
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
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
};
