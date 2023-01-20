import {Link} from 'react-router-dom';
import rasterDataConfig from '../../data/raster';

import './style.scss';

const AppContent = () => {
	const rasterPathPrefix = './map/raster/';
	const rasterLinks = rasterDataConfig.map(c => {
		return (
			<Link key={c.key} to={`${rasterPathPrefix}${c.key}`}>
				{c.key}
			</Link>
		);
	});

	return (
		<div className={'APP-TEMPLATE-REPLACE-APP-STYLE-PREFIX-App ptr-light'}>
			{rasterLinks}
		</div>
	);
};

AppContent.propTypes = {};

export default AppContent;
