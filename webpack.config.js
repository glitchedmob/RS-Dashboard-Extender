/* eslint no-console:"off" */
const {resolve} = require('path');

module.exports = {
	context: resolve('src'),
	entry: [
		'./ts/app.ts',
		'./sass/app.scss'
	],
	devtool: "source-map",
	output: {
		filename: 'bundle.js',
		path: resolve('dist/build/js'),
		publicPath: "dist/build/"
	},
	resolve: {
    extensions: ['.ts']
  },
	module: {
		loaders: [
			{ test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {name: '../css/[name].css'}
					},
					{ loader: 'extract-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			},
			{ test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/ },
		]
	}
}