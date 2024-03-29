import PropTypes from 'prop-types';
import {DeckGlMap} from '@gisatcz/ptr-maps';
import geolib from '@gisatcz/deckgl-geolib';

const CogBitmapLayer = geolib.CogBitmapLayer;

import './style.scss';
const CogRgb = ({url, view, options}) => {
	const layerId = 'CogBitmapLayer';
	console.log('xxx_url', url);
	const layers = [new CogBitmapLayer(layerId, url, options)];
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

CogRgb.propTypes = {
	url: PropTypes.string,
	view: PropTypes.object,
	options: PropTypes.object,
};

export default CogRgb;
