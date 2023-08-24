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
import {useRef, useState} from 'react';

const Map = ({layers, view}) => {
	const [viewIn3D, setViewIn3D] = useState(false);
	const [stateVersion, setStateVersion] = useState(0);
	const stateViewRef = useRef(view);

	const removeViewTransitionRef = useRef(update => {
		update.deckGlTransitionProperties = {};

		stateViewRef.current = {
			...stateViewRef.current,
			deckGlTransitionProperties: {},
		};
	});

	const toggle3DView = () => {
		setViewIn3D(!viewIn3D);

		const stateUpdate = {
			...stateViewRef.current,
			pitch: viewIn3D ? 0 : 60,
			bearing: viewIn3D ? 0 : 0,
		};
		stateViewRef.current = stateUpdate;
	};

	const updateStateView = view => {
		setStateVersion(stateVersion + 1);
		stateViewRef.current = {
			...stateViewRef.current,
			...view,
		};
	};

	return (
		<div className={'APP-TEMPLATE-REPLACE-APP-STYLE-PREFIX-App ptr-light'}>
			<div className="Flus-Map-Components">
				<IconTool
					className={`Flus-3Dview ${viewIn3D ? 'active' : ''}`}
					onClick={() => toggle3DView()}
					floating
					medium
					icon="ri-3D-view"
				/>
			</div>
			<PresentationMap
				mapComponent={DeckGlMap}
				view={stateViewRef.current}
				layers={layers}
				mapComponentProps={{
					controller: {
						dragRotate: viewIn3D,
					},
				}}
				backgroundLayer={{
					key: 'background-osm',
					type: 'wmts',
					options: {
						url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
					},
				}}
				onViewChange={updateStateView}
			>
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
