const webpack = require('webpack');

module.exports = function override(config) {
	// comment when using package from npm
	config.resolve = {
		alias: {
			// react:
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-charts/node_modules/react',
			// 'react-dom':
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-charts/node_modules/react-dom',
			// '@gisatcz/ptr-charts': '/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-charts',
			// '@gisatcz/cross-package-react-context':
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/cross-package-react-context',
			// '@gisatcz/ptr-core': '/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-core',
			// '@gisatcz/ptr-utils': '/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-utils',
			// '@gisatcz/ptr-state': '/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-state',
		},
		fallback: {
			fs: false,
			crypto: require.resolve('crypto-browserify'),
			path: require.resolve('path-browserify'),
			os: require.resolve('os-browserify/browser'),
			// process: require.resolve('process/browser'),
			stream: false,
			url: require.resolve('url/'),
		},
	};
	config.plugins = [
		...config.plugins,
		// fix "process is not defined" error:
		// (do "npm install process" before running the build)
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
	];

	return config;
};
