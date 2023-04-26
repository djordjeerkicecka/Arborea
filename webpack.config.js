const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ['./src/js/scripts.js', './src/scss/styles.scss'],
	output: {
		filename: 'js/scripts.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: ['autoprefixer']
							}
						}
					},
					'sass-loader'
				]
			}
		]
	},
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin()]
    },
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/styles.css'
		}),
		new StylelintPlugin({
			configFile: '.stylelintrc.json'
		}),
        new CopyPlugin({
			patterns: [
				{ from: './src/assets', to: './assets' },
				{ from: './src/index.html', to: './' }
			]
		}),
	]
};
