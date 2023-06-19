const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
	entry: './src/index.ts',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
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
			title: 'webpack example',
			template: 'index.html',
			scriptLoading: 'blocking'
		})
	]
}