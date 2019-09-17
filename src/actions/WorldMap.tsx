import { Dispatch, Action } from 'redux';
import { IPlace, ITravel } from '../components/WorldMap';

interface IGetTravelAction extends Action {
	travel: ITravel | null,
	error: string
	
}

export interface ISetMarkerAction extends Action {
	place: IPlace
}

export const getTravel = (travel: ITravel | null, error: string): IGetTravelAction => ({
    type: 'WORLD_MAP_GET_TRAVEL',
    travel,
    error
})

export const setMarker = (place: IPlace): ISetMarkerAction => ({
    type: 'WORLD_MAP_SET_MARKER',
    place
})

export const getTravelAsync = () => {
    return async (dispatch: Dispatch<IGetTravelAction>): Promise<void> => {
        try {
            const res = await fetch('./Travel.xml', {method: 'GET'});

            dispatch(getTravel(await res.json(), ''));
        }
        catch (ex) {
            dispatch(getTravel(null, ex));
        }
	}	
}

