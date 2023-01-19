import PropTypes from 'prop-types';
import {screens} from '../../constants/app';
import ShowcaseList from '../ShowcaseList';
import CogRgb from '../CogRgb';

import './style.scss';

// url: 'https://gisat-gis.eu-central-1.linodeobjects.com/eman/sentinel/Manila_S2_Composite_2020022_Mercator_COG.tif',
// url: 'https://gisat-gis.eu-central-1.linodeobjects.com/eman/export_cog_1.tif',
// url: 'https://gisat-gis.eu-central-1.linodeobjects.com/eman/DEMs/Copernicus_DSM_10_merged_Mercator_COG.tif',

const getScreenComponent = name => {
	switch (name) {
		case screens['home']:
			return <ShowcaseList />;
		case screens['cog-rgb-tiff-32']:
			return (
				<CogRgb
					type={'tiff-32bit'}
					url={
						'https://gisat-gis.eu-central-1.linodeobjects.com/eman/export_cog_1.tif'
					}
					view={{
						// center: {lat: 14.5991729, lon: 120.9089351}, //manila
						center: {lat: -17.55763497384545, lon: 168.4525809704237}, //Porta Vila Island
						boxRange: 4000,
					}}
				/>
			);
		// case screens['datasets']:
		// 	return <DatasetCatalog />;
		// case screens['collections']:
		// 	return <CollectionCatalog />;
	}
};

const AppContent = ({activeScreen}) => {
	return (
		<div className={'APP-TEMPLATE-REPLACE-APP-STYLE-PREFIX-App ptr-light'}>
			{getScreenComponent(activeScreen)}
		</div>
	);
};

AppContent.propTypes = {
	activeScreen: PropTypes.string,
};

export default AppContent;
