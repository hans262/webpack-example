const path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
	mode: 'production',//生产'development'开发
	entry: {
		main:["@babel/polyfill", "./src/index.js"],
		// vendor:['react','react-dom']
	},
	output:{
		filename:"[name].js",
		path:path.join(__dirname, 'build'),
		publicPath:'',
	},
	module:{
		rules:[{
			test:/\.m?js$/,
			exclude:/(node_modules|bower_components)/,
			use:'babel-loader'
		},{
			test:/\.css$/,
			use:['style-loader', 'css-loader']
		},{
			test:/\.(png|jpe?g|gif|webp)(\?.*)?$/,
			use:[{
				loader:'url-loader',
				options: {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        }
			}]
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			chunks: [
        'chunk-vendors',
        'chunk-common',
        'index'
      ],
      template: 'public/index.html',
      filename: 'index.html',
      title: undefined
		})
	],
	devServer:{
		// contentBase: path.join(__dirname, "dist"),
		open:true,
		compress: true,
		port: 3000,
		proxy:{
			'/api':'http://localhost:5000'
		}
	}
}