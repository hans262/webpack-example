const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'dist')
	},
	/** @type {import('webpack-dev-server').Configuration}*/
	devServer: {
		static: {
			directory: path.join(__dirname, '/'),
		},
		open: true,
		compress: true,
		port: 3000,
		proxy: {
			'/api': 'http://localhost:5000'
		}
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js', '.tsx', '.json']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
}