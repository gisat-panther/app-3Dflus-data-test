import {Route, HashRouter, Routes} from 'react-router-dom';
import ShowcaseList from '../ShowcaseList';
import CogRgb from '../CogRgb';

import './style.scss';

// url: 'https://gisat-gis.eu-central-1.linodeobjects.com/eman/sentinel/Manila_S2_Composite_2020022_Mercator_COG.tif',
// url: 'https://gisat-gis.eu-central-1.linodeobjects.com/eman/export_cog_1.tif',
// url: 'https://gisat-gis.eu-central-1.linodeobjects.com/eman/DEMs/Copernicus_DSM_10_merged_Mercator_COG.tif',

const AppContent = () => {
	return (
		<HashRouter>
			<Routes>
				<Route exact path="/" element={<ShowcaseList />} />
				<Route
					exact
					path="/map/tiff-32bit"
					element={
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
					}
				/>
			</Routes>
		</HashRouter>
	);
};

AppContent.propTypes = {};

export default AppContent;
