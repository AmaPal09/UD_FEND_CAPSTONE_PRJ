// Webpack common configuration
const path = require('path');
const webpack = require('webpack');

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
		]
	}
}