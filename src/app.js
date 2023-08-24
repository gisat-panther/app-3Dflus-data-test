import Helmet from 'react-helmet';
import {connects} from '@gisatcz/ptr-state';
import {AppContainer} from '@gisatcz/ptr-components';

import Action from './state/Action';
import {init as initCore} from './core';
import {appKey} from './constants/app';

// base styles need to be imported before all components
import '@gisatcz/ptr-core/lib/styles/reset.css';
import '@gisatcz/ptr-core/lib/styles/base.scss';
import './styles/index.scss';

import AppContent from './components/AppContent';

const path = process.env.PUBLIC_URL;

function initApp(Store) {
	initCore({});
	Store.dispatch(Action.init(path));
}

const ConnectedAppContainer = connects.AppContainer(AppContainer);

const AppWrapper = () => {
	return (
		<>
			<Helmet defaultTitle="APP-TEMPLATE-REPLACE-APP-TITLE" />
			<ConnectedAppContainer appKey={appKey}>
				<AppContent />
			</ConnectedAppContainer>
		</>
	);
};

export {AppWrapper, initApp};
