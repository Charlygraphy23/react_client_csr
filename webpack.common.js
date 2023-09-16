import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
	entry: "./src/main.js", // Entry point for your application
	watchOptions: {
		ignored: ["build", "node_modules"],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	plugins: [
		// Plugin to extract CSS into separate files
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
	],
	output: {
		clean: true,
		path: path.resolve(process.cwd(), "build"), // Output directory
		filename: "bundle.js",
		publicPath: "/",
		filename: (pathData) => {
			return pathData.chunk.name === "main" ? "bundle.js" : "[name].bundle.js";
		},
	},
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

			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
};
