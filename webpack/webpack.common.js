const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dest = path.join(__dirname, '../dist');

module.exports = {
	entry: [
		path.resolve(__dirname, './polyfills'),
		path.resolve(__dirname, '../src/index')
	],
	output: {
		path: dest,
		filename: 'bundle.[hash].js'
	},
	plugins: [
		new CleanWebpackPlugin([dest], {root: path.resolve(__dirname, '..')}),
		new CopyWebpackPlugin([
			{from: path.resolve(__dirname, '../public'), to: 'public'}
		]),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html')
		}),
	],
	resolve: {
		alias: {
			'~': path.resolve(__dirname, '../src')
		}
	},
	module: {
		rules: [
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto'
			},
			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]'
					}
				}
			},
			{
				test: /\.s?css$/i,
				use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader']
			}
		]
	}
};
