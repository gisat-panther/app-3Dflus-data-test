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
		options: {
			type: 'image',
			useChannel: 5,
			useColorsBasedOnValues: true,
			clipLow: 0,
			colorsBasedOnValues: [
				[1, '#deebf7'],
				[2, '#9ecae1'],
				[3, '#3182bd'],
			],
		},
		view: {
			center: {lat: 14.5991729, lon: 120.9089351}, //Porta Vila Island
			boxRange: 4000,
		},
	},
	{
		key: 'rio_cogeo_deflate_float32_heatmap_Manila_flood',
		type: 'rgbCOG',
		creation:
			'rio cogeo create --cog-profile=deflate --blocksize=256 --overview-blocksize=256 --web-optimized --aligned-levels=8 --dtype=float32 --config CHECK_DISK_FREE_SPACE=FALSE',
		url_local: '',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/versions/v3/Manila/jrc_gsw_mercator_comp_cog_deflate_float32.tif',
		description: '',
		options: {
			type: 'image',
			useChannel: 30,
			useHeatMap: true,
			colorScaleValueRange: [0, 3],
			clipLow: 1,
			colorScale: ['red', 'yellow'],
		},
		view: {
			center: {lat: 14.5991729, lon: 120.9089351}, //Porta Vila Island
			boxRange: 4000,
		},
	},
	{
		key: 'rio_cogeo_deflate_float32_singleColorClipped_Manila_flood',
		type: 'rgbCOG',
		creation:
			'rio cogeo create --cog-profile=deflate --blocksize=256 --overview-blocksize=256 --web-optimized --aligned-levels=8 --dtype=float32 --config CHECK_DISK_FREE_SPACE=FALSE',
		url_local: '',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/versions/v3/Manila/jrc_gsw_mercator_comp_cog_deflate_float32.tif',
		description: '',
		options: {
			type: 'image',
			useChannel: 10,
			useSingleColor: true,
			clipLow: 1,
			clipHigh: 3,
			color: 'red',
			clippedColor: [245, 245, 220, 80],
		},
		view: {
			center: {lat: 14.5991729, lon: 120.9089351}, //Porta Vila Island
			boxRange: 6000,
		},
	},
	{
		key: 'rio_cogeo_deflate_int16_heatmapCustomRange_Nepal_wetSnow',
		type: 'rgbCOG',
		creation:
			'rio cogeo create --cog-profile=deflate --blocksize=256 --overview-blocksize=256 --web-optimized --aligned-levels=8 --config CHECK_DISK_FREE_SPACE=FALSE --nodata 0 --zoom-level 16',
		url_local: '',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/esaGdaAdbNepal23/rasters/snow_cover_cog/WET_SNOW_3857_2017-2021_cog_deflate_in16_zoom16_levels8.tif',
		description: '',
		options: {
			type: 'image',
			useChannel: 1,
			useHeatMap: true,
			colorScale: ['#fde725', '#5dc962', '#20908d', '#3a528b', '#440154'],
			colorScaleValueRange: [1, 100, 200, 300, 366],
		},
		view: {
			center: {
				lat: 28.104,
				lon: 85.547,
			}, //Melamchi, Nepal
			boxRange: 10000,
		},
	},
	{
		key: 'rio_cogeo_deflate_int16_heatmapCustomRange_Nepal_snow',
		type: 'rgbCOG',
		creation:
			'rio cogeo create --cog-profile=deflate --blocksize=256 --overview-blocksize=256 --web-optimized --aligned-levels=8 --config CHECK_DISK_FREE_SPACE=FALSE --nodata 0 --zoom-level 16',
		url_local: '',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/esaGdaAdbNepal23/rasters/snow_cover_cog/SNOW_3857_2017-2021_cog_deflate_in16_zoom16_levels8.tif',
		description: '',
		options: {
			type: 'image',
			useChannel: 1,
			useHeatMap: true,
			colorScale: ['#fde725', '#5dc962', '#20908d', '#3a528b', '#440154'],
			colorScaleValueRange: [1, 100, 200, 300, 366],
		},
		view: {
			center: {
				lat: 28.104,
				lon: 85.547,
			}, //Melamchi, Nepal
			boxRange: 10000,
		},
	},
	{
		key: 'rio_cogeo_deflate_float32_heatmap_Nepal_slope',
		type: 'rgbCOG',
		creation:
			'rio cogeo create --cog-profile=deflate --blocksize=256 --overview-blocksize=256 --web-optimized --aligned-levels=8 --dtype=float32 --zoom-level=16 ',
		url_local: '',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/esaGdaAdbNepal23/rasters/copdem_cog/copdem_slope_cog_deflate_float32_zoom16_levels8.tif',
		description: '',
		options: {
			type: 'image',
			useChannel: 0,
			useHeatMap: true,
			colorScale: ['#ffffff', '#feff51', '#fd8c3b', '#ff0037'],
			colorScaleValueRange: [0, 15, 30, 45],
		},
		view: {
			center: {
				lat: 28.104,
				lon: 85.547,
			}, //Melamchi, Nepal
			boxRange: 10000,
		},
	},
	{
		key: 'rio_cogeo_deflate_float32_heatmap_Nepal_dem',
		type: 'rgbCOG',
		creation:
			'rio cogeo create --cog-profile=deflate --blocksize=256 --overview-blocksize=256 --web-optimized --aligned-levels=8 --dtype=float32 --zoom-level=16',
		url_local: '',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/esaGdaAdbNepal23/rasters/copdem_cog/copdem_cog_deflate_float32_zoom16_levels8.tif',
		description: '',
		options: {
			type: 'image',
			useChannel: 0,
			useHeatMap: true,
			colorScale: [
				'#00883f',
				'#109435',
				'#20a02a',
				'#31ac1f',
				'#92b118',
				'#fab014',
				'#c88723',
				'#ac692c',
				'#af5a2d',
				'#c8846c',
				'#ffffff',
			],
			colorScaleValueRange: [
				900, 1400, 1900, 2400, 2900, 3400, 3900, 4400, 4900, 5400, 5800,
			],
		},
		view: {
			center: {
				lat: 28.104,
				lon: 85.547,
			}, //Melamchi, Nepal
			boxRange: 10000,
		},
	},
	{
		key: 'rio_cogeo_deflate_float32_heatmap_clipLow_clipHigh_Nepal_dem',
		type: 'rgbCOG',
		creation:
			'rio cogeo create --cog-profile=deflate --blocksize=256 --overview-blocksize=256 --web-optimized --aligned-levels=8 --dtype=float32 --zoom-level=16',
		url_local: '',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/esaGdaAdbNepal23/rasters/copdem_cog/copdem_cog_deflate_float32_zoom16_levels8.tif',
		description: '',
		options: {
			type: 'image',
			useChannel: 0,
			useHeatMap: true,
			clipLow: 2000,
			clipHigh: 5000,
			colorScale: [
				'#00883f',
				'#109435',
				'#20a02a',
				'#31ac1f',
				'#92b118',
				'#fab014',
				'#c88723',
				'#ac692c',
				'#af5a2d',
				'#c8846c',
				'#ffffff',
			],
			colorScaleValueRange: [
				900, 1400, 1900, 2400, 2900, 3400, 3900, 4400, 4900, 5400, 5800,
			],
		},
		view: {
			center: {
				lat: 28.104,
				lon: 85.547,
			}, //Melamchi, Nepal
			boxRange: 10000,
		},
	},
	{
		key: 'rio_cogeo_deflate_uint8_rgb_Nepal_sentinel',
		type: 'rgbCOG',
		creation:
			'rio cogeo create --cog-profile=deflate --blocksize=256 --overview-blocksize=256 --web-optimized --aligned-levels=8 --dtype=float32 --zoom-level=16',
		url_local: '',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/esaGdaAdbNepal23/rasters/sentinel_cog/2017-11-19-00_00_2017-11-19-23_59_Sentinel-2_L1C_SWIR_cog_nodata.tif',
		description: '',
		options: {
			type: 'image',
		},
		view: {
			center: {
				lat: 28.104,
				lon: 85.547,
			}, //Melamchi, Nepal
			boxRange: 10000,
		},
	},
	{
		key: 'rio_cogeo_deflate_uint16_global_DEM_WMSoverlay',
		type: 'heightCOG',
		creation: 'tbd',
		url_local: '',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/versions/v3/DEM/dtm.bareearth_ensemble_p10_250m_s_2018_go_epsg4326_v20230221_deflate_cog.tif',
		description: '',
		options: {
			type: 'terrain',
			multiplier: 0.1,
		},
		bitmapUrl:
			'https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam9ldmVjeiIsImEiOiJja3lpcms5N3ExZTAzMm5wbWRkeWFuNTA3In0.dHgiiwOgD-f7gD7qP084rg',
		view: {
			center: {
				lat: 28.104,
				lon: 85.547,
			}, //Melamchi, Nepal
			boxRange: 20000,
		},
	},
	{
		key: 'rio_cogeo_deflate_uint16_global_DEM_no_overlay',
		type: 'heightCOG',
		creation: 'tbd',
		url_local: '',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/versions/v3/DEM/dtm.bareearth_ensemble_p10_250m_s_2018_go_epsg4326_v20230221_deflate_cog.tif',
		description: '',
		options: {
			type: 'terrain',
			multiplier: 0.1,
		},
		view: {
			center: {
				lat: 28.104,
				lon: 85.547,
			}, //Melamchi, Nepal
			boxRange: 20000,
		},
	},
	{
		key: 'rio_cogeo_deflate_float32_local_DEM_no_overlay',
		type: 'heightCOG',
		creation:
			'rio cogeo create --cog-profile=deflate --blocksize=256 --overview-blocksize=256 --web-optimized --aligned-levels=8 --dtype=float32 --zoom-level=16 --config CHECK_DISK_FREE_SPACE=FALSE',
		url_local: '',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/esaGdaAdbNepal23/rasters/copdem_cog/copdem_cog_deflate_float32_zoom16_levels8.tif',
		description: '',
		options: {
			type: 'terrain',
		},
		view: {
			center: {
				lat: 28.104,
				lon: 85.547,
			}, //Melamchi, Nepal
			boxRange: 18000,
		},
	},
	{
		key: 'rio_cogeo_deflate_float32_local_DEM_snow_overlay',
		type: 'heightCOG',
		creation:
			'rio cogeo create --cog-profile=deflate --blocksize=256 --overview-blocksize=256 --web-optimized --aligned-levels=8 --dtype=float32 --zoom-level=16 --config CHECK_DISK_FREE_SPACE=FALSE',
		url_local: '',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/esaGdaAdbNepal23/rasters/copdem_cog/copdem_cog_deflate_float32_zoom16_levels8.tif',
		description: '',
		options: {
			type: 'terrain',
		},
		view: {
			center: {
				lat: 28.104,
				lon: 85.547,
			}, //Melamchi, Nepal
			boxRange: 18000,
		},
	},
	{
		key: 'rio_cogeo_deflate_float32_local_DEM_no_overlay_exaggeration',
		type: 'heightCOG',
		creation:
			'rio cogeo create --cog-profile=deflate --blocksize=256 --overview-blocksize=256 --web-optimized --aligned-levels=8 --dtype=float32 --zoom-level=16 --config CHECK_DISK_FREE_SPACE=FALSE',
		url_local: '',
		url_public:
			// 'https://gisat-gis.eu-central-1.linodeobjects.com/esaGdaAdbNepal23/rasters/copdem_cog/copdem_cog_deflate_float32_zoom16_levels8.tif',
			// 'https://gisat-gis.eu-central-1.linodeobjects.com/esaGdaAdbNepal23/rasters/copdem_cog/copdem_cog_deflate_float32_zoom16_levels8.tif',
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/versions/V3/DEM/luzon_dem_deflate_cog_uint32.tif',
		description: '',
		options: {
			type: 'terrain',
			multiplier: 3,
		},
		view: {
			center: {
				lat: 28.104,
				lon: 85.547,
			}, //Melamchi, Nepal
			boxRange: 18000,
		},
	},
	// {
	// 	key: 'efate_jpeg',
	// 	type: 'rgbCOG',
	// 	creation:
	// 		'gdal_translate efate.tif efate_jpeg.tif -of COG -co compress=jpeg -co TILING_SCHEME=GoogleMapsCompatible',
	// 	url_local: '/app-3Dflus-data-test/static/data/efate.tif',
	// 	url_public:
	// 		'https://gisat-gis.eu-central-1.linodeobjects.com/eman/ortofoto/efate_jpeg.tif',
	// 	description: '',
	// 	view: {
	// 		center: {lat: -17.55763497384545, lon: 168.4525809704237}, //Porta Vila Island
	// 		boxRange: 4000,
	// 	},
	// },
	// {
	// 	key: 'efate_lzw',
	// 	type: 'rgbCOG',
	// 	creation:
	// 		'gdal_translate efate.tif efate_lzw_1.tif -of COG -co compress=lzw -co TILING_SCHEME=GoogleMapsCompatible',
	// 	url_local: '/app-3Dflus-data-test/static/data/efate_lzw.tif',
	// 	url_public:
	// 		'https://gisat-gis.eu-central-1.linodeobjects.com/eman/ortofoto/efate_lzw.tif',
	// 	description: '',
	// 	view: {
	// 		center: {lat: -17.55763497384545, lon: 168.4525809704237}, //Porta Vila Island
	// 		boxRange: 4000,
	// 	},
	// },
	// {
	// 	key: 'efate_packbits',
	// 	type: 'rgbCOG',
	// 	creation:
	// 		'gdal_translate efate.tif efate_packbits.tif -of COG -co COMPRESS=PACKBITS -co TILING_SCHEME=GoogleMapsCompatible',
	// 	url_local: '/app-3Dflus-data-test/static/data/efate_packbits.tif',
	// 	url_public:
	// 		'https://gisat-gis.eu-central-1.linodeobjects.com/eman/ortofoto/efate_packbits.tif',
	// 	description: '',
	// 	view: {
	// 		center: {lat: -17.55763497384545, lon: 168.4525809704237}, //Porta Vila Island
	// 		boxRange: 4000,
	// 	},
	// },
	{
		key: 'manila_height_and_tiled_vector',
		type: 'heightAndTiledVectors',
		creation:
			'gdal_translate pamzam_10m_Mercator_COG.tif pamzam_10m_Mercator_COG_height.tif -of COG -co COMPRESS=DEFLATE -co TILING_SCHEME=GoogleMapsCompatible',
		url_local:
			'/app-3Dflus-data-test/static/data/pamzam_10m_Mercator_COG_height_packbits.tif',
		url_public:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/versions/v3/DEM/luzon_dem_deflate_cog.tif',
		description: '',
		bitmapUrl:
			'https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiam9ldmVjeiIsImEiOiJja3lpcms5N3ExZTAzMm5wbWRkeWFuNTA3In0.dHgiiwOgD-f7gD7qP084rg',
		options: {
			type: 'terrain',
			multiplier: 3,
		},
		vectorUrl:
			'https://gisat-gis.eu-central-1.linodeobjects.com/eman/mvt/142_decimated_2/{z}/{x}/{y}.mvt',
		view: {
			center: {lat: 14.65, lon: 121.11},
			boxRange: 11586,
			pitch: 60,
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
