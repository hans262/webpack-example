const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.join(__dirname, '/'),
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
		extensions: ['.ts', '.js', '.json'],
		alias: {
			'@': path.join(__dirname, './src/'),
		}
	}
}