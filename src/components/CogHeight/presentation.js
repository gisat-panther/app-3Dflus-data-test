import PropTypes from 'prop-types';
import Map from '../common/Map/presentation';
import {TerrainLayer} from '@deck.gl/geo-layers';
// import {CogTileLayer} from '../../deckGlLayers/CogTileLayer/CogTileLayer.ts';
import {useGeoData} from '@gisatcz/deckgl-geolib';

const CogRgb = ({url, view}) => {
	const opacity = 0;
	const geoObject = useGeoData(url, true, opacity);
	const layers = [
		new TerrainLayer({
			id: 'terrain-layer',
			elevationDecoder: {
				rScaler: 6553.6,
				gScaler: 25.6,
				bScaler: 0.1,
				offset: -10230,
			},
			material: {diffuse: 1},
			meshMaxError: 3, // SET TO 1 FOR MAX QUALITY.
			bounds: geoObject.bbox,
			elevationData: geoObject.heightMap,
			texture: geoObject.image,
		}),
	];

	return (
		<div className={'APP-TEMPLATE-REPLACE-APP-STYLE-PREFIX-App ptr-light'}>
			<Map layers={layers} view={view} />
		</div>
	);
};

CogRgb.propTypes = {
	url: PropTypes.string,
	view: PropTypes.object,
};

export default CogRgb;
