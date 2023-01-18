import {CHANGE_PAGE} from '@gisatcz/ptr-router';

const INITIAL_STATE = {history: []};

const setPage = (state, action) => {
	return {
		name: action.name,
		params: action.params,
		history: [
			{
				name: action.name,
				params: action.params,
			},
			...state.history,
		],
	};
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHANGE_PAGE:
			return setPage(state, action.payload);
		default:
			return state;
	}
};
