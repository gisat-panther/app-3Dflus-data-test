import PropTypes from 'prop-types';

import './style.scss';

// const getScreenComponent = name => {
// 	switch (name) {
// 		case screens['applications']:
// 			return <ApplicationCatalog />;
// 		case screens['datasets']:
// 			return <DatasetCatalog />;
// 		case screens['collections']:
// 			return <CollectionCatalog />;
// 	}
// };

const AppContent = ({activeScreen}) => {
	return (
		<div className={'APP-TEMPLATE-REPLACE-APP-STYLE-PREFIX-App ptr-light'}>
			{<>Hi, welcome in ZOO.</>}
			{`activeScreen: ${activeScreen}`}
		</div>
	);
};

AppContent.propTypes = {
	activeScreen: PropTypes.string,
};

export default AppContent;
