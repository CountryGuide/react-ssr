const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV || "development",
	entry: path.resolve(__dirname, 'client', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'static'),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		modules: ['node_modules', path.resolve(__dirname, 'client')],
		extensions: ['*', '.js', '.jsx']
	}
};
