// App specific actions
import Select from '../Select';
import {getRouter} from '../../router';
//TODO separate to router logic
const updateAppUrl = (name, update) => {
	return (dispatch, getState) => {
		//selector get url for route [name, update]
		const url = Select.router.getUrlForPath(getState(), name, update);
		const router = getRouter();
		router.nav(url);
	};
};

export default {
	updateAppUrl,
};
