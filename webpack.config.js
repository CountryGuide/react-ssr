const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV || "development",
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
		modules: [path.resolve(__dirname, './'), path.resolve(__dirname, 'client'), 'node_modules' ],
		extensions: ['*', '.js', '.jsx']
	}
};
