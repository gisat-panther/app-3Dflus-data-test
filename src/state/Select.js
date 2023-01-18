import {Select as CommonSelect} from '@gisatcz/ptr-state';
import router from './router/selectors';
import APPTEMPLATEREPLACESTORENAME from './APPTEMPLATEREPLACESTORENAME/selectors'; // eslint-disable-line

export default {
	...CommonSelect,
	router,
	APPTEMPLATEREPLACESTORENAME: APPTEMPLATEREPLACESTORENAME,
};
