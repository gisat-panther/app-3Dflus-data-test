import {config as getConfig} from '@gisatcz/ptr-core';
import {Action as CommonAction} from '@gisatcz/ptr-state';
import {appKey} from '../constants/app';

import * as APPTEMPLATEREPLACESTORENAME from './APPTEMPLATEREPLACESTORENAME/actions'; // eslint-disable-line

require('dotenv').config();

const getAppEnvConfig = () => {
	if (process?.env) {
		const apiBackendProtocol = process.env?.REACT_APP_apiBackendProtocol;
		const apiBackendHost = process.env?.REACT_APP_apiBackendHost;
		const apiBackendPath = process.env?.REACT_APP_apiBackendPath;
		const requestPageSize = process.env?.REACT_APP_requestPageSize;

		return {
			...(apiBackendProtocol ? {apiBackendProtocol} : {}),
			...(apiBackendHost ? {apiBackendHost} : {}),
			...(apiBackendPath ? {apiBackendPath} : {}),
			...(requestPageSize ? {requestPageSize} : {}),
		};
	} else {
		return {};
	}
};

function init(path) {
	return dispatch => {
		dispatch(CommonAction.app.setBaseUrl(path));

		const config = getConfig(getAppEnvConfig());
		dispatch(CommonAction.app.updateLocalConfiguration(config));
		dispatch(CommonAction.app.setKey(appKey));
	};
}

export default {
	...CommonAction,
	init,
	APPTEMPLATEREPLACESTORENAME: {
		...APPTEMPLATEREPLACESTORENAME,
	},
};
