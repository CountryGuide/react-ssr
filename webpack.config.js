const path = require('path');

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, 'server.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "server.js"
	},
	target: "node",
	node: {
		__dirname: false,
		__filename: false
	},
	externals: [require('webpack-node-externals')()],
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
