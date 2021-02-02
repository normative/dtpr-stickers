import React, { useCallback, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import airtableReducer, {
  fetchAirtableFailed, fetchAirtableRequested, fetchAirtableSuccessed, getAirtableDataInitialState,
} from 'reducers/airtable';
import placeReducer, {
  fetchPlaceFailed, placeInitialState, fetchPlaceRequested, fetchPlaceSuccessed,
} from 'reducers/place';
import sensorsReducer, {
  fetchSensorsFailed, fetchSensorsRequested, fetchSensorsSuccessed, sensorsInitialState,
} from 'reducers/sensors';
import { getPlace, getSensors } from 'sideEffects/firebase';
import { getAirtableData } from 'sideEffects/airtable';
import PlaceView from 'components/Places/PlaceView';

function Place() {
  const [place, dispatchPlace] = useReducer(placeReducer, placeInitialState);
  const [sensors, dispatchSensors] = useReducer(
    sensorsReducer,
    sensorsInitialState,
  );
  const [airtable, dispatchAirtable] = useReducer(
    airtableReducer,
    getAirtableDataInitialState(),
  );

  const { placeId }: { placeId: string } = useParams();

  const handlePlaceOnSuccess = useCallback((placeData) => {
    dispatchPlace(fetchPlaceSuccessed(placeData));
  }, []);

  const handlePlaceOnError = useCallback((e) => {
    dispatchPlace(fetchPlaceFailed(e));
  }, []);

  const handleSensorsOnSuccess = useCallback((sensorsData) => {
    dispatchSensors(fetchSensorsSuccessed(sensorsData));
  }, []);

  const handleSensorsOnError = useCallback((e) => {
    dispatchSensors(fetchSensorsFailed(e));
  }, []);

  const handleAirtableOnSuccess = useCallback((airtableData) => {
    dispatchAirtable(fetchAirtableSuccessed(airtableData));
  }, []);

  const handleAirtableOnError = useCallback((e) => {
    dispatchAirtable(fetchAirtableFailed(e));
  }, []);

  useEffect(() => {
    dispatchAirtable(fetchAirtableRequested());
    getAirtableData(handleAirtableOnSuccess, handleAirtableOnError);
  }, []);

  useEffect(() => {
    if (!airtable.loadedFromSession) {
      sessionStorage.setItem('airtabledata', JSON.stringify(airtable.data));
    }
  }, [airtable.data]);

  useEffect(() => {
    dispatchPlace(fetchPlaceRequested());
    getPlace(placeId, handlePlaceOnSuccess, handlePlaceOnError);
  }, [placeId]);

  useEffect(() => {
    if (place.data) {
      dispatchSensors(fetchSensorsRequested());
      getSensors(place.data, handleSensorsOnSuccess, handleSensorsOnError);
    }
  }, [place.data]);

  return (
    <PlaceView place={place} airtable={airtable} sensors={sensors} />
  );
}

export default Place;
