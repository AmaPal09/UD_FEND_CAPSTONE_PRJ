// Webpack DEV configuration
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		clean: true,
		// libraryTarget: 'var'
	},
	//devtool: 'source-map',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	plugins: [
		new CleanWebpackPlugin()
	],
});
