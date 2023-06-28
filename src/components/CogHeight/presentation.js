import PropTypes from 'prop-types';
import {DeckGlMap} from '@gisatcz/ptr-maps';
import geolib from '@gisatcz/deckgl-geolib';
import {_WMSLayer as WMSLayer,
} from '@deck.gl/geo-layers';

const CogTerrainLayer = geolib.CogTerrainLayer;

import './style.scss';
const CogHeight = ({url, view, options, bitmapUrl, bitmapOtions}) => {
	const layerId = 'CogTerrainLayer';
	console.log('xxx_url', url);
	const layers = [new CogTerrainLayer(layerId, url, options, bitmapUrl, bitmapOtions)];
	console.log('xxx_layers', layers);
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

CogHeight.propTypes = {
	url: PropTypes.string,
	view: PropTypes.object,
	options: PropTypes.object,
	bitmapUrl: PropTypes.object,
	bitmapOtions: PropTypes.object
};

export default CogHeight;
