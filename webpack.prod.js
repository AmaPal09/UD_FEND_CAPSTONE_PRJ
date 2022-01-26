//Webpack PROD configuration
const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: '[name].[contenthash].bundle.js',
		clean: true
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({filename: "[name].css"}),
		new WorkboxPlugin.GenerateSW(),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(),
					new CssMinimizerPlugin()
		],
	},
});