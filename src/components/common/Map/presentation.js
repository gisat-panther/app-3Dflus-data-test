import PropTypes from 'prop-types';
import {
	DeckGlMap,
	PresentationMap,
	MapScale,
	MapControls,
	deckgl_core,
} from '@gisatcz/ptr-maps';
import {IconTool} from '@gisatcz/ptr-atoms';

import './style.scss';
import {useState} from 'react';

const FlyTo = new deckgl_core.LinearInterpolator(['pitch']);
// const FlyTo = new deckgl_core.LinearInterpolator();

const Map = ({layers, view}) => {
	const [stateView, setStateView] = useState({
		...view,
		// transitionInterpolator: FlyTo,
		// transitionDuration: 10000,
	});
	const [viewIn3D, setViewIn3D] = useState(false);
	const toggle3DView = () => {
		setViewIn3D(!viewIn3D);
		setStateView({
			...stateView,
			pitch: viewIn3D ? 0 : 60,
			bearing: viewIn3D ? 0 : 0,
			transitionInterpolator: FlyTo,
			transitionDuration: 1000,
			onTransitionEnd: () => {
				console.log('xxx_trans_end');
			},
		});
	};
	const FlyTo = new deckgl_core.FlyToInterpolator();

	const updateStateView = view => {
		console.log('xxx', view);
		// setStateView({
		// 	...stateView,
		// 	...view,
		// });
	};

	return (
		<div className={'APP-TEMPLATE-REPLACE-APP-STYLE-PREFIX-App ptr-light'}>
			<PresentationMap
				mapComponent={DeckGlMap}
				view={stateView}
				backgroundLayer={{
					key: 'background-osm',
					type: 'wmts',
					options: {
						url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
					},
				}}
				mapComponentProps={{
					controller: {
						dragRotate: viewIn3D,
					},
				}}
				onViewChange={updateStateView}
				layers={layers}
			>
				<div className="Flus-Map-Components">
					<IconTool
						className={`Flus-3Dview ${viewIn3D ? 'active' : ''}`}
						onClick={() => toggle3DView()}
						floating
						medium
						icon="ri-3D-view"
					/>
				</div>
				<MapControls levelsBased zoomOnly className="" />
				<MapScale className="" />
			</PresentationMap>
		</div>
	);
};

Map.propTypes = {
	layers: PropTypes.array,
	view: PropTypes.object,
};

export default Map;
