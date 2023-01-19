import {connect} from '@gisatcz/ptr-state';
import Presentation from './presentation';
import Select from '../../../state/Select';
// TODO -> move Link to atoms && ptr-state

// EXAMPLE
{
	/* <Link
	tabIndex={0}
	classes={classes}
	name={path}
	router={getRouter()}
	ignoreQueryString={true}
	updateParams={{someParams: 22}}
	paramsFilter={['tags']} //which params will be forgoten
	recoverParams={true}
	recoverParamsFilter={['tags']} //which params/queryStrings should not be recovered
	ignoreHistory={false}
/>; */
}

const mapStateToProps = (state, ownProps) => {
	const url = Select.router.getUrlForPath(
		state,
		ownProps.name,
		ownProps.updateParams,
		ownProps.ignoreQueryString,
		ownProps.paramsFilter,
		ownProps.recoverParams,
		ownProps.recoverParamsFilter
	);
	return {
		href: `${url}`,
	};
};

const mapDispatchToProps = () => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
