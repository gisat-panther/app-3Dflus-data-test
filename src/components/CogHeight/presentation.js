import PropTypes from 'prop-types';
import {DeckGlMap} from '@gisatcz/ptr-maps';
import {CogTileLayer} from '../../deckGlLayers/CogTileLayer/CogTileLayer';

import './style.scss';
const CogRgb = ({url, view}) => {
	const layers = [new CogTileLayer({url})];

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
