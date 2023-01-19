import PropTypes from 'prop-types';
import {screens} from '../../constants/app';
import ShowcaseList from '../ShowcaseList';
import CogRrb from '../CogRrb';

import './style.scss';

const getScreenComponent = name => {
	switch (name) {
		case screens['home']:
			return <ShowcaseList />;
		case screens['cog-rgb-tiff-32']:
			return <CogRrb type={'tiff-32bit'} />;
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
