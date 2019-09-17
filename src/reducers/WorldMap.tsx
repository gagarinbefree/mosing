import produce from 'immer';
import { IWorldMapState } from '../components/WorldMap';

const initalState: IWorldMapState = {
    type: '',
    payload: {
		map: {
			lat: 51.505,
			long: -0.09,
			zoom: 13
		},
		marker: null,
        travel: null,
        error: ''
    }
}

const WorldMapReducer = (state = initalState, action: any) => {
    return produce(state, (draft) => {
        if (action.type === 'WORLD_MAP_GET_TRAVEL') {
            draft.payload.travel = action.travel;
        }
        else if (action.type === 'WORLD_MAP_SET_MARKER') {
			draft.payload.marker = action.marker;				
        }
    });
}

export default WorldMapReducer;