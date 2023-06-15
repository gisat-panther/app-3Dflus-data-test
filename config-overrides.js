const webpack = require('webpack');

module.exports = function override(config) {
	// comment when using package from npm
	config.resolve = {
		alias: {
			// react:
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-maps/node_modules/react',
			// 'react-dom':
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-maps/node_modules/react-dom',
			// '@gisatcz/deckgl-geolib':
			// 	'/Users/vojtadubrovsky/_WORK/GISAT/git/deck.gl-geotiff',
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
			// '@gisatcz/ptr-maps': '/Users/vojtadubrovsky/_WORK/GISAT/git/ptr-maps',
		},
		fallback: {
			zlib: false,
			fs: false,
			url: require.resolve('url'),
			'process/browser': require.resolve('process/browser'),
			assert: require.resolve('assert'),
			crypto: require.resolve('crypto-browserify'),
			http: require.resolve('stream-http'),
			https: require.resolve('https-browserify'),
			os: require.resolve('os-browserify/browser'),
			buffer: require.resolve('buffer/'),
			stream: require.resolve('stream-browserify'),
			encoding: require.resolve('encoding/'),
		},
	};
	config.plugins = [
		...config.plugins,
		// fix "process is not defined" error:
		// (do "npm install process" before running the build)
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
		// new webpack.ProvidePlugin({
		// 	Buffer: ['buffer', 'Buffer'],
		// }),
	];

	return config;
};
