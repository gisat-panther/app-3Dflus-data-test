import PropTypes from 'prop-types';
import {DeckGlMap} from '@gisatcz/ptr-maps';
import {CogTileLayer} from '../../deckGlLayers/CogTileLayer/CogTileLayer';

import './style.scss';
const AppContent = () => {
	const layers = [
		new CogTileLayer({
			// url: 'https://gisat-gis.eu-central-1.linodeobjects.com/eman/sentinel/Manila_S2_Composite_2020022_Mercator_COG.tif',
			url: 'https://gisat-gis.eu-central-1.linodeobjects.com/eman/export_cog_1.tif',
			// url: 'https://gisat-gis.eu-central-1.linodeobjects.com/eman/DEMs/Copernicus_DSM_10_merged_Mercator_COG.tif',
		}),
	];

	return (
		<div className={'APP-TEMPLATE-REPLACE-APP-STYLE-PREFIX-App ptr-light'}>
			<DeckGlMap
				view={{
					// center: {lat: 14.5991729, lon: 120.9089351}, //manila
					center: {lat: -17.55763497384545, lon: 168.4525809704237}, //Porta Vila Island
					boxRange: 4000,
				}}
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

AppContent.propTypes = {
	activeScreen: PropTypes.string,
};

export default AppContent;
