import PropTypes from 'prop-types';
import Link from '../common/Link';
import {getRouter} from '../../router';

import './style.scss';

const AppContent = () => {
	const router = getRouter();
	return (
		<div className={'APP-TEMPLATE-REPLACE-APP-STYLE-PREFIX-App ptr-light'}>
			<Link
				name={'cog-rgb-tiff-32'}
				router={router}
				recoverParams={true}
				paramsFilter={['tags', 'detailsViewKey']}
			>
				cog-rgb-tiff-32
			</Link>
		</div>
	);
};

AppContent.propTypes = {
	activeScreen: PropTypes.string,
};

export default AppContent;
