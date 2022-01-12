// Webpack common configuration
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
	entry: path.resolve('./src/client/index.js'),
	module: {
		rules: [
			//Javascripts
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			//Images
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					outputPath: 'images',
					name: '[name].[ext]',
				},
			},
			//Fonts
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			}
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/client/views/index.html",
			filename: "./index.html"
		}),
		new FaviconsWebpackPlugin('./src/client/media/fevicon/capstonePrj.png'),
	]
}