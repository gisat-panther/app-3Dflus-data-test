import {Route, HashRouter, Routes} from 'react-router-dom';
import ShowcaseList from '../ShowcaseList';
import rasterDataConfig from '../../data/raster';

import CogRgb from '../CogRgb';
import CogHeight from '../CogHeight';
import CogHeightAndVector from '../CogHeightAndVector';
import Vector from '../Vector';

import './style.scss';

// url: 'https://gisat-gis.eu-central-1.linodeobjects.com/eman/sentinel/Manila_S2_Composite_2020022_Mercator_COG.tif',
// url: 'https://gisat-gis.eu-central-1.linodeobjects.com/eman/export_cog_1.tif',
// url: 'https://gisat-gis.eu-central-1.linodeobjects.com/eman/DEMs/Copernicus_DSM_10_merged_Mercator_COG.tif',

const AppContent = () => {
	// const dataUrlDestination = 'url_local';
	const dataUrlDestination = 'url_public';
	const dataVectorUrlDestination = 'vectorUrl';
	const rasterPathPrefix = 'map/raster/';
	const rasterRoutes = rasterDataConfig.map(c => {
		if (c.type === 'rgbCOG') {
			return (
				<Route
					key={c.key}
					exact
					path={`${rasterPathPrefix}${c.key}`}
					element={
						<CogRgb
							// type={'jpeg'}
							url={c[dataUrlDestination]}
							options={c.options}
							view={c.view}
						/>
					}
				/>
			);
		} else if (c.type === 'heightCOG') {
			return (
				<Route
					key={c.key}
					exact
					path={`${rasterPathPrefix}${c.key}`}
					element={
						<CogHeight
							// type={'jpeg'}
							url={c[dataUrlDestination]}
							options={c.options}
							view={c.view}
							bitmapUrl={c.bitmapUrl}
							bitmapOtions={c.bitmapOptions}
						/>
					}
				/>
			);
		} else if (c.type === 'heightAndTiledVectors') {
			return (
				<Route
					key={c.key}
					exact
					path={`${rasterPathPrefix}${c.key}`}
					element={
						<CogHeightAndVector
							// type={'jpeg'}
							url={c[dataUrlDestination]}
							vectorUrl={c[dataVectorUrlDestination]}
							options={c.options}
							view={c.view}
							bitmapUrl={c.bitmapUrl}
							bitmapOtions={c.bitmapOptions}
						/>
					}
				/>
			);
		} else if (c.type === 'vector') {
			return (
				<Route
					key={c.key}
					exact
					path={`${rasterPathPrefix}${c.key}`}
					element={
						<Vector
							// type={'jpeg'}
							url={c[dataUrlDestination]}
							view={c.view}
						/>
					}
				/>
			);
		}
	});

	return (
		<HashRouter>
			<Routes>
				<Route exact path="/" element={<ShowcaseList />} />
				{rasterRoutes}
			</Routes>
		</HashRouter>
	);
};

AppContent.propTypes = {};

export default AppContent;
