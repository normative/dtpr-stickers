import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import placeReducer, {
  fetchPlaceFailed, placeInitialState, fetchPlaceRequested, fetchPlaceSuccessed, PlaceStateType,
} from 'reducers/place';
import sensorsReducer, {
  fetchSensorsFailed,
  fetchSensorsRequested,
  fetchSensorsSuccessed,
  sensorsInitialState,
  SensorsStateType,
} from 'reducers/sensors';
import { getPlace, getSensors } from 'sideEffects/firebase';
import PlaceView from 'components/Places/PlaceView';
import { AirtableContext } from 'context/airtable';
import useReducerState from 'hooks/useReducerState';
import { AirtableStateType } from 'reducers/airtable';

function Place() {
  const [place, placeActions] = useReducerState(
    placeReducer, placeInitialState, fetchPlaceRequested, fetchPlaceSuccessed, fetchPlaceFailed,
  );
  const [sensors, sensorsActions] = useReducerState(
    sensorsReducer,
    sensorsInitialState,
    fetchSensorsRequested,
    fetchSensorsSuccessed,
    fetchSensorsFailed,
  );
  const airtable = useContext(AirtableContext);
  const { placeId }: { placeId: string } = useParams();

  useEffect(() => {
    placeActions.onRequest();
    getPlace(placeId, placeActions.onSuccess, placeActions.onError);
  }, [placeId]);

  useEffect(() => {
    if (place.data) {
      sensorsActions.onRequest();
      getSensors(place.data, sensorsActions.onSuccess, sensorsActions.onError);
    }
  }, [place.data]);

  return (
    <PlaceView
      place={place as PlaceStateType}
      airtable={airtable as AirtableStateType}
      sensors={sensors as SensorsStateType}
    />
  );
}

export default Place;
