import {connect} from '@gisatcz/ptr-state';
import Presentation from './presentation';
import Select from '../../state/Select';

const mapStateToProps = state => {
	const activeScreen = Select.router.getActiveScreen(state);
	return {
		activeScreen: activeScreen,
	};
};

const mapDispatchToProps = () => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
