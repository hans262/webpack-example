const path = require('path')

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: "main.js",
		path: path.join(__dirname, 'dist')
	},
	devServer: {
		open: true,
		compress: true,
		port: 3000,
		proxy: {
			'/api': 'http://127.0.0.1:5000'
		}
	},
	resolve: {
		extensions: ['.js', '.json'],
		alias: {
			'@': path.join(__dirname, './src/'),
		}
	}
}