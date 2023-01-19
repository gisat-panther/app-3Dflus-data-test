import PropTypes from 'prop-types';

const Link = ({children, classes, tabIndex, href, router}) => {
	const onLinkClick = (evt, url) => {
		//If ctrl or meta (osx cmd) key is down, open page in new tab
		if (evt.ctrlKey || evt.metaKey) {
			return true;
		} else {
			evt.preventDefault();
			router.nav(url);
		}
	};

	return (
		<a
			href={href}
			onClick={e => onLinkClick(e, href)}
			tabIndex={tabIndex}
			className={classes}
		>
			{children}
		</a>
	);
};

Link.propTypes = {
	children: PropTypes.node,
	tabIndex: PropTypes.number,
	classes: PropTypes.string,
	href: PropTypes.string,
	router: PropTypes.shape({
		nav: PropTypes.func,
	}),
	ignoreHistory: PropTypes.bool, //TODO implement in ptr-router
};

export default Link;
