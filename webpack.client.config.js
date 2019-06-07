const path = require('path');

module.exports = {
	mode: "development",
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
		extensions: ['*', '.js', '.jsx']
	}
};
