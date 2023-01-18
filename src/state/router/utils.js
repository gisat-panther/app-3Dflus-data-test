import {isArray as _isArray} from 'lodash';
import queryString from 'query-string';

export const getParsedQueryString = urlQueryString => {
	if (!urlQueryString) {
		return {};
	}
	const parsed = queryString.parse(urlQueryString, {arrayFormat: 'comma'});
	return parsed || {};
};

export const getValueAsArray = value => {
	return _isArray(value) ? value : [value];
};

/**
 *
 * @param {Object} routes
 * @param {string} routeName
 * @returns
 */
export const getParentRouteForRouteName = (routes, routeName, parentRoute) => {
	if (routes && Object.keys(routes)?.length > 0) {
		for (const route of Object.values(routes)) {
			if (route?.name === routeName) {
				return parentRoute;
			} else if (route.children) {
				const childrenFit = getParentRouteForRouteName(
					route.children,
					routeName,
					route
				);
				if (childrenFit) {
					return childrenFit;
				}
			}
		}
	} else {
		return null;
	}
};

export const getStoreFromRequest = request => {
	// store is inside request under Symbol "store"
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symbols_and_for...in_iteration
	return request[Object.getOwnPropertySymbols(request)[0]];
};
