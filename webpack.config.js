const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");

const { NODE_ENV = "production" } = process.env;
console.info(NODE_ENV);
module.exports = {
	entry: "./src/",
	mode: "development",
	target: "node",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index.js",
	},
	externalsPresets: { node: true },
	externals: [nodeExternals()],
	resolve: {
		extensions: [".ts"],
		alias: {
			src: path.resolve(__dirname, "src/"),
			"#controllers": path.resolve(__dirname, "src/Controllers/"),
            "#middleware": path.resolve(__dirname, "src/Middleware/"),
            "#models": path.resolve(__dirname, "src/Models/"),
            "#database": path.resolve(__dirname, "src/Database/")
		},
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [{ loader: "ts-loader" }],
				exclude: [/__tests__/],
			},
		],
	},
	plugins: [
		new NodemonPlugin(),
	],
	optimization: {
		minimize: true,
	},
};