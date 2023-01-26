import PropTypes from 'prop-types';
import {DeckGlMap, deckgl_geolayers} from '@gisatcz/ptr-maps';
import {MVTLoader} from '@loaders.gl/mvt';
import './style.scss';

function hexToRgb(hex) {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (result) {
		return [
			parseInt(result[1], 16),
			parseInt(result[2], 16),
			parseInt(result[3], 16),
		];
	} else {
		return [];
	}
}

const styleClasses = [
	{
		fill: '#b1001d',
		name: '< -50 (Subsidence)',
		interval: [-1000, -50],
		intervalBounds: [true, false],
	},
	{
		fill: '#ca2d2f',
		interval: [-50, -40],
		intervalBounds: [true, false],
	},
	{
		fill: '#e25b40',
		interval: [-40, -30],
		intervalBounds: [true, false],
	},
	{
		fill: '#ffaa00',
		interval: [-30, -20],
		intervalBounds: [true, false],
	},
	{
		fill: '#ffff00',
		interval: [-20, -10],
		intervalBounds: [true, false],
	},
	{
		fill: '#a0f000',
		interval: [-10, 0],
		intervalBounds: [true, false],
	},
	{
		fill: '#4ce600',
		interval: [0, 10],
		intervalBounds: [true, false],
	},
	{
		fill: '#50d48e',
		interval: [10, 20],
		intervalBounds: [true, false],
	},
	{
		fill: '#00c3ff',
		interval: [20, 30],
		intervalBounds: [true, false],
	},
	{
		fill: '#0f80d1',
		interval: [30, 40],
		intervalBounds: [true, false],
	},
	{
		fill: '#004ca8',
		interval: [40, 50],
		intervalBounds: [true, false],
	},
	{
		fill: '#003e8a',
		name: '(Uplift) 50 <',
		interval: [50, 1000],
		intervalBounds: [true, false],
	},
];

const CogRgb = ({url, view}) => {
	const layers = [
		new deckgl_geolayers.MVTLayer({
			data: url,
			loaders: MVTLoader,
			loadOptions: {worker: false},
			minZoom: 0,
			maxZoom: 15,
			getLineColor: [192, 192, 192],
			pointType: 'circle',
			getPointRadius: 100,
			getFillColor: feature => {
				const styleClass = styleClasses.find(c => {
					return (
						c.interval[0] < feature.properties.vel_avg &&
						c.interval[1] > feature.properties.vel_avg
					);
				});
				return hexToRgb(styleClass?.fill);
			},
			getLineWidth: f => {
				return 6;
			},
			lineWidthMinPixels: 1,
		}),
	];

	return (
		<div className={'APP-TEMPLATE-REPLACE-APP-STYLE-PREFIX-App ptr-light'}>
			<DeckGlMap
				view={view}
				backgroundLayer={{
					key: 'background-osm',
					type: 'wmts',
					options: {
						url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
					},
				}}
				layers={layers}
			></DeckGlMap>
		</div>
	);
};

CogRgb.propTypes = {
	url: PropTypes.string,
	view: PropTypes.object,
};

export default CogRgb;
