export default [
	{
		key: 'efate_deflate',
		creation:
			'gdal_translate efate.tif efate_deflate.tif -of COG -co compress=deflate -co TILING_SCHEME=GoogleMapsCompatible',
		url_local: '/app-3Dflus-data-test/static/efate_deflate.tif',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/ortofoto/efate_deflate.tif',
		description: '',
		view: {
			center: {lat: -17.55763497384545, lon: 168.4525809704237}, //Porta Vila Island
			boxRange: 4000,
		},
	},
	{
		key: 'efate_jpeg',
		creation:
			'gdal_translate efate.tif efate_jpeg.tif -of COG -co compress=jpeg -co TILING_SCHEME=GoogleMapsCompatible',
		url_local: '/app-3Dflus-data-test/static/efate.tif',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/ortofoto/efate_jpeg.tif',
		description: '',
		view: {
			center: {lat: -17.55763497384545, lon: 168.4525809704237}, //Porta Vila Island
			boxRange: 4000,
		},
	},
	{
		key: 'efate_lzw',
		creation:
			'gdal_translate efate.tif efate_lzw_1.tif -of COG -co compress=lzw -co TILING_SCHEME=GoogleMapsCompatible',
		url_local: '/app-3Dflus-data-test/static/efate_lzw.tif',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/ortofoto/efate_lzw.tif',
		description: '',
		view: {
			center: {lat: -17.55763497384545, lon: 168.4525809704237}, //Porta Vila Island
			boxRange: 4000,
		},
	},
	{
		key: 'efate_packbits',
		creation:
			'gdal_translate efate.tif efate_packbits.tif -of COG -co COMPRESS=DEFLATE -co TILING_SCHEME=GoogleMapsCompatible',
		url_local: '/app-3Dflus-data-test/static/efate_packbits.tif',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/ortofoto/efate_packbits.tif',
		description: '',
		view: {
			center: {lat: -17.55763497384545, lon: 168.4525809704237}, //Porta Vila Island
			boxRange: 4000,
		},
	},
];
