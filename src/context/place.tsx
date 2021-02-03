import useReducerState from 'hooks/useReducerState';
import React, {
  ReactNode,
  useCallback,
} from 'react';

import placeReducer, {
  fetchPlaceFailed, fetchPlaceRequested, fetchPlaceSuccessed, placeInitialState, PlaceStateType,
} from 'reducers/place';
import { getPlace } from 'sideEffects/firebase';

export const PlaceContext = React.createContext(
  [placeInitialState, {}] as [PlaceStateType, { [name:string]: any }],
);

export function PlaceProvider({ children }: { children: ReactNode }) {
  const [place, placeActions] = useReducerState(
    placeReducer, placeInitialState, fetchPlaceRequested, fetchPlaceSuccessed, fetchPlaceFailed,
  );

  const onRequest = useCallback((placeId) => {
    if (place.data?.id === placeId) return;

    placeActions.onRequest();
    getPlace(placeId, placeActions.onSuccess, placeActions.onError);
  }, [place.data]);

  const value: [PlaceStateType, { onRequest, onSuccess, onError }] = [
    place as PlaceStateType, { ...placeActions, onRequest },
  ];

  return (
    <PlaceContext.Provider value={value}>
      {children}
    </PlaceContext.Provider>
  );
}
