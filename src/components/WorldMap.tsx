import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { isExistsTypeAnnotation } from '@babel/types';

export interface IWorldMap {
	lat: number,
	long: number,
	zoom: number
}

export interface IPlace {
	name: string,
	long: number,
	zoom: number,	
}

export interface ITravel {
	routes: IRoute[]
}

export interface IRoute {
	name: string,
	places: IPlace[]
}

export interface IWorldMapState {
    type: string;
    payload: IWordMapPayload;
}

export interface IWordMapPayload {    
	map: IWorldMap,
	travel: ITravel | null;
	marker: IPlace | null;
	error: string;
}

export interface IWorldMapProps {
	getTravelAsync(): Promise<void>;
	setMarker(place: IPlace): void;
}

class WorldMap extends React.Component<IWorldMapProps & IWordMapPayload> {
	constructor(props: IWorldMapProps & IWordMapPayload) {
		super(props);        
	}

	render() {
		return <Map center={[this.props.map.lat, this.props.map.long]} zoom={this.props.map.zoom} style={{ width: '100%', height: '100vh' }}>
			<TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		</Map>
	}
}

export default WorldMap;