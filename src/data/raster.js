export default [
	{
		key: 'efate_deflate',
		type: 'rgbCOG',
		creation:
			'gdal_translate efate.tif efate_deflate.tif -of COG -co compress=deflate -co TILING_SCHEME=GoogleMapsCompatible',
		url_local: '/app-3Dflus-data-test/static/data/efate_deflate.tif',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/versions/v3/Manila/jrc_gsw_mercator_comp_cog_deflate_float32.tif',
		description: '',
		view: {
			center: {lat: 14.5991729, lon: 120.9089351}, //Porta Vila Island
			boxRange: 4000,
		},
	},
	{
		key: 'efate_jpeg',
		type: 'rgbCOG',
		creation:
			'gdal_translate efate.tif efate_jpeg.tif -of COG -co compress=jpeg -co TILING_SCHEME=GoogleMapsCompatible',
		url_local: '/app-3Dflus-data-test/static/data/efate.tif',
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
		type: 'rgbCOG',
		creation:
			'gdal_translate efate.tif efate_lzw_1.tif -of COG -co compress=lzw -co TILING_SCHEME=GoogleMapsCompatible',
		url_local: '/app-3Dflus-data-test/static/data/efate_lzw.tif',
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
		type: 'rgbCOG',
		creation:
			'gdal_translate efate.tif efate_packbits.tif -of COG -co COMPRESS=PACKBITS -co TILING_SCHEME=GoogleMapsCompatible',
		url_local: '/app-3Dflus-data-test/static/data/efate_packbits.tif',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/ortofoto/efate_packbits.tif',
		description: '',
		view: {
			center: {lat: -17.55763497384545, lon: 168.4525809704237}, //Porta Vila Island
			boxRange: 4000,
		},
	},
	{
		key: 'manila_height_deflate',
		type: 'heightCOG',
		creation:
			'gdal_translate pamzam_10m_Mercator_COG.tif pamzam_10m_Mercator_COG_height.tif -of COG -co COMPRESS=DEFLATE -co TILING_SCHEME=GoogleMapsCompatible',
		url_local:
			'/app-3Dflus-data-test/static/data/pamzam_10m_Mercator_COG_height_packbits.tif',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/ortofoto/efate_packbits.tif',
		description: '',
		view: {
			center: {lat: 14.5991729, lon: 120.9089351},
			boxRange: 4000,
			pitch: 0,
			bearing: 0,
		},
	},
	{
		key: 'vector_01',
		type: 'vector',
		creation:
			'ogr2ogr -f MVT 142_decimated response.json -dsco MAXZOOM=17 -dsco TILE_EXTENSION=mvt -dsco COMPRESS=NO',
		url_local:
			'/app-3Dflus-data-test/static/data/142_decimated/{z}/{x}/{y}.mvt',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/mvt/142_decimated_2/{z}/{x}/{y}.mvt',
		publish:
			's3cmd put ~/_WORK/GISAT/git/app-3Dflus-data-test/public/static/142_decimated/ s3://gisat-gis/eman/mvt/142_decimated_2/ --recursive --acl-public',
		description: '',
		view: {
			center: {lat: 14.5991729, lon: 120.9089351}, //Porta Vila Island
			boxRange: 4000,
			// pitch: 30,
			// bearing: 0,
		},
	},
];
