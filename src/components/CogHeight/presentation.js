import PropTypes from 'prop-types';
import {DeckGlMap} from '@gisatcz/ptr-maps';
import geolib from '@gisatcz/deckgl-geolib';
import Map from '../common/Map/presentation';

const CogTerrainLayer = geolib.CogTerrainLayer;

import './style.scss';
const CogHeight = ({url, view, options, bitmapUrl, bitmapOtions}) => {
	const layerId = 'CogTerrainLayer';
	const layers = [
		new CogTerrainLayer(layerId, url, options, bitmapUrl, bitmapOtions),
	];
	return (
		<div className={'APP-TEMPLATE-REPLACE-APP-STYLE-PREFIX-App ptr-light'}>
			<Map view={view} layers={layers} />
		</div>
	);
};

CogHeight.propTypes = {
	url: PropTypes.string,
	view: PropTypes.object,
	options: PropTypes.object,
	bitmapUrl: PropTypes.object,
	bitmapOtions: PropTypes.object,
};

export default CogHeight;
