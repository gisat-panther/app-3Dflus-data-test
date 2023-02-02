const webpack = require('webpack');

module.exports = function override(config) {
	// comment when using package from npm
	config.resolve = {
		alias: {
			// react:
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-maps/node_modules/react',
			// 'react-dom':
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-maps/node_modules/react-dom',
			// '@luma.gl/webgl':
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-maps/node_modules/@luma.gl/webgl',
			// '@luma.gl/core':
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-maps/node_modules/@luma.gl/core',
			// '@deck.gl/geo-layers':
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-maps/node_modules/@deck.gl/geo-layers',
			// '@deck.gl/core':
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-maps/node_modules/@deck.gl/core',
			// '@luma.gl/webgl':
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-maps/node_modules/@luma.gl/webgl',
			// '@deck.gl/layers':
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-maps/node_modules/@deck.gl/layers',
			// '@gisatcz/ptr-charts': '/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-charts',
			// '@gisatcz/cross-package-react-context':
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/cross-package-react-context',
			// '@gisatcz/ptr-core': '/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-core',
			// '@gisatcz/ptr-utils': '/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-utils',
			// '@gisatcz/ptr-maps': '/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-maps',
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
