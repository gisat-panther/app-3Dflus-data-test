// supported query strings
export default {
	darkMode: 'darkMode',
	tags: 'tags',
	viewKey: 'viewKey',
	detailsViewKey: 'detailsViewKey',
	detailsView: 'detailsView',
};

export const screens = {
	'cog-rgb-tiff-32': {
		key: 'cog-rgb-tiff-32',
		represents: ['cog-rgb-tiff-32'],
	},
	map: {
		key: 'map',
		represents: ['map'],
	},
	home: {
		key: 'home',
		represents: ['home'],
	},
};

export const defaultScreen = screens['home'].key;
