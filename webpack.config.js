const path = require('path');
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

 console.log();

 console.log('nic look here')

module.exports = {
	...defaultConfig,
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.s[ac]ss$/i,
				use: [
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@wordpress/default"]
					}
				}
			}
		],
	},
};