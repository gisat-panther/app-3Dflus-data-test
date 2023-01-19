import {Link} from 'react-router-dom';

import './style.scss';

const AppContent = () => {
	return (
		<div className={'APP-TEMPLATE-REPLACE-APP-STYLE-PREFIX-App ptr-light'}>
			<Link to={'./map/tiff-32bit'}>cog-rgb-tiff-32</Link>
		</div>
	);
};

AppContent.propTypes = {};

export default AppContent;
