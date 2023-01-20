//
// Just rewriten original TypeScript file to he JavaScript
//
import {deckgl_core, deckgl_geolayers} from '@gisatcz/ptr-maps';
import {BitmapLayer} from '@deck.gl/layers';
// import {SourceUrl} from '@chunkd/source-url';
import {SourceHttp} from '@chunkd/source-http';
import {CogTiff} from '@cogeotiff/core';
import jpeg from 'jpeg-js';
//import { inflate } from "deflate-js";
import {inflate} from 'pako';
import {worldToLngLat} from '@math.gl/web-mercator';
import {GeoImage} from '@gisatcz/deckgl-geolib';

// type vct = { x: number, y: number };

let cog;
let img;
let geo;
let url;
// let blankImg;
let src;
let possibleResolutions;
let zoomLevelOffsets;
let extent;
let tileSize;
let minZoom;
let maxZoom;
let tileCount;
let resolution;
// let loaded;

// interface CogTileLayerProps extends LayerProps {
//     url: string,
//     loaded?: boolean;
// }

class CogTileLayer extends deckgl_core.CompositeLayer {
	constructor(props) {
		super(props);
		this.layerName = 'CogTileLayer';

		this.defaultProps = {
			address: {type: 'accessor', value: ''},
		};
		url = props.url;
	}

	async initializeState() {
		console.log('LAYER INITIALIZE STATE');
		await this.loadCog();
		geo = new GeoImage();
	}

	updateState() {
		console.log('LAYER UPDATE STATE');
	}
	shouldUpdateState(status) {
		console.log('LAYER SHOULD UPDATE STATE');
		console.log(status.oldProps);
		console.log(status.props);

		if (url.length > 1) {
			return true;
		}
	}

	renderLayers() {
		console.log('LAYER RENDER');
		const layer = new deckgl_geolayers.TileLayer({
			getTileData: tileData => {
				possibleResolutions = this.generatePossibleResolutions(256, 32);
				return this.getTileAt(
					tileData.index.x,
					tileData.index.y,
					tileData.index.z
				);
			},

			minZoom: minZoom,
			maxZoom: maxZoom,
			tileSize: tileSize,
			maxRequests: 5,
			extent: extent,

			renderSubLayers: props => {
				const {
					bbox: {west, south, east, north},
				} = props.tile;

				//Zde je kus kódu, který dělá problémy a hází "Cannot read properties of undefined (reading 'setVertexCount')" error přímo z Deck.GL (není to z naší strany, očekávám že je to jejich bug).
				//Celý tento CogTileLayer má 100% stejný kód jako vrstva kterou jsem již ukazoval. V example appce funguje.
				//Tato část, která hází chyby je přitom zkopírována přímo z reference TileLayer https://deck.gl/docs/api-reference/geo-layers/tile-layer#tilelayer.
				return new BitmapLayer(props, {
					data: null,
					image: props.data,
					bounds: [west, south, east, north],
				});
				///////////////////////////////////////////////////////
			},
		});

		return [layer];
	}

	generatePossibleResolutions(tileSize, maxZoomLevel) {
		const equatorC = 40075000;
		const metersPerPixelAtEquator = equatorC / tileSize;
		let resolutions = [];

		for (let i = 0; i < maxZoomLevel; i++) {
			resolutions[i] = metersPerPixelAtEquator / Math.pow(2, i);
		}

		return resolutions;
	}

	indexOfClosestTo(array, value) {
		let closest = array[0];
		let closestIndex = 0;
		for (let i = 0; i < array.length; i++) {
			if (Math.abs(array[i] - value) < Math.abs(closest - value)) {
				closest = array[i];
				closestIndex = i;
			}
		}
		return closestIndex;
	}

	unproject(input) {
		const e = 40075000.0;

		const cartesianPosition = [input[0] * (512 / e), input[1] * (512 / e)];
		const cartographicPosition = worldToLngLat(cartesianPosition);
		const cartographicPositionAdjusted = [
			cartographicPosition[0],
			-cartographicPosition[1],
		];

		console.log(cartographicPositionAdjusted);
		return cartographicPositionAdjusted;
	}

	async loadCog() {
		await this.initImage(url);

		tileSize = img.tileSize.width;
		tileCount = img.tileCount;
		resolution = img.resolution;
		//console.log(tileSize);
		// loaded = true;
		this.updateState();
		//this.renderLayers();
	}

	async initImage(address) {
		src = new SourceHttp(address);
		cog = await CogTiff.create(src);
		img = cog.getImage(cog.images.length - 1);
		tileSize = img.tileSize.width;
		possibleResolutions = this.generatePossibleResolutions(tileSize, 32);

		var initialZoom = this.indexOfClosestTo(
			possibleResolutions,
			img.resolution[0]
		);
		var finalZoom = initialZoom + cog.images.length;

		const origin = img.origin;
		const e = 40075000.0;

		let cx = origin[0];
		let cy = origin[1];

		let acx = e * 0.5 + cx;
		let acy = -(e * 0.5 + (cy - e));
		let mpt = img.resolution[0] * img.tileSize.width;

		let ox = Math.round(acx / mpt);
		let oy = Math.round(acy / mpt);

		zoomLevelOffsets = new Map();
		zoomLevelOffsets.set(initialZoom, [ox, oy]);

		let px = ox;
		let py = oy;

		for (let z = 1; z < cog.images.length; z++) {
			px = px * 2;
			py = py * 2;
			zoomLevelOffsets.set(initialZoom + z, [px, py]);
		}

		let acxm = e * 0.5 + img.bbox[2];
		let acym = -(e * 0.5 + (img.bbox[1] - e));

		const minX = acx;
		const minY = acy;
		const maxX = acxm;
		const maxY = acym;

		const unprojectedMin = this.unproject([minX, maxY]);
		const unprojectedMax = this.unproject([maxX, minY]);

		const ext = [
			unprojectedMin[0],
			unprojectedMin[1],
			unprojectedMax[0],
			unprojectedMax[1],
		];

		extent = ext;
		minZoom = initialZoom;
		maxZoom = finalZoom;

		this.generatePossibleResolutions(tileSize, 32);
		await this.initLayer(this.indexOfClosestTo(possibleResolutions, 9999999));
	}

	async initLayer(z) {
		img = cog.getImageByResolution(possibleResolutions[z]);
		console.log(img);
	}

	async getTileAt(x, y, z) {
		const wantedMpp = possibleResolutions[z];
		const currentMpp = resolution[0];

		if (z !== this.indexOfClosestTo(possibleResolutions, currentMpp)) {
			await this.initLayer(
				this.indexOfClosestTo(possibleResolutions, wantedMpp)
			);
		}

		const tileWidth = tileSize;
		const tilesX = tileCount.x;
		const tilesY = tileCount.y;

		console.log('Current image tiles: ' + tilesX + ', ' + tilesY);

		let decompressed;

		console.log('tileIndex: ' + [x, y]);

		const offset = zoomLevelOffsets.get(z);

		console.log('offset: ' + offset);

		const ox = offset[0];
		const oy = offset[1];

		console.log('getting tile: ' + [x - ox, y - oy]);

		if (x - ox >= 0 && y - oy >= 0) {
			const tile = await img.getTile(x - ox, y - oy);
			const data = tile.bytes;

			if (img.compression === 'image/jpeg') {
				decompressed = jpeg.decode(data, {useTArray: true});
			} else if (img.compression === 'application/deflate') {
				console.log('deflate here');
				decompressed = await inflate(data);
				decompressed = await geo.getBitmap({
					rasters: [decompressed],
					width: tileWidth,
					height: tileWidth,
				});
			} else {
				console.log('Unexpected compression method: ' + img.compression);
			}
		}

		return new Promise((resolve, reject) => {
			resolve(decompressed);
			reject('Cannot retrieve tile ');
		});
	}
}

export {CogTileLayer};
