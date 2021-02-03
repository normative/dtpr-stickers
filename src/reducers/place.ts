import { PlaceData, ReducerStateType } from '../common/types';

export const FETCH_PLACE_REQUESTED = 'FETCH_PLACE_REQUESTED';
export function fetchPlaceRequested(): PlaceActionType {
  return ({ type: FETCH_PLACE_REQUESTED });
}

export const FETCH_PLACE_SUCCESSED = 'FETCH_PLACE_SUCCESSED';
export function fetchPlaceSuccessed(place): PlaceActionType {
  return ({ type: FETCH_PLACE_SUCCESSED, payload: { place } });
}

export const FETCH_PLACE_FAILED = 'FETCH_PLACE_FAILED';
export function fetchPlaceFailed(error): PlaceActionType {
  return ({ type: FETCH_PLACE_FAILED, payload: { error } });
}

export interface PlaceStateType extends ReducerStateType {
  id?: string,
  data?: PlaceData;
}

export const placeInitialState: PlaceStateType = {
  isFetching: false,
  didInvalidate: false,
  data: null,
  error: null,
};

interface PlacePayloadType {
  id?: string;
  place?: PlaceData | {};
  error?: Error;
}

interface PlaceActionType {
  type: string;
  payload?: PlacePayloadType;
}

function placeReducer(state, { type, payload }: PlaceActionType) {
  switch (type) {
    case FETCH_PLACE_REQUESTED:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        error: false,
      };
    case FETCH_PLACE_SUCCESSED:
      return {
        ...state,
        isFetching: false,
        id: payload.id,
        data: payload.place,
      };
    case FETCH_PLACE_FAILED:
      return {
        ...state,
        isFetching: false,
        data: [],
        error: payload.error,
        didInvalidate: true,
      };
    default:
      throw new Error();
  }
}

export default placeReducer;
