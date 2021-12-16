//Webpack PROD configuration
const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
	mode: 'production',
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: '[name].[contenthash].bundle.js',
		clean: true
	},
	devtool: 'source-map',
});