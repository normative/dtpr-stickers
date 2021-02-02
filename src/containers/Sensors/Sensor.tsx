import React, { useCallback, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import airtableReducer, {
  fetchAirtableFailed, fetchAirtableRequested, fetchAirtableSuccessed, getAirtableDataInitialState,
} from 'reducers/airtable';
import placeReducer, {
  fetchPlaceFailed, placeInitialState, fetchPlaceRequested, fetchPlaceSuccessed,
} from 'reducers/place';
import { getPlace, getSensor } from 'sideEffects/firebase';
import { getAirtableData } from 'sideEffects/airtable';
import sensorReducer, {
  sensorInitialState, fetchSensorRequested, fetchSensorSuccessed, fetchSensorFailed,
} from 'reducers/sensor';

import SensorView from 'components/Sensors/SensorView';

function Sensor() {
  const [place, dispatchPlace] = useReducer(placeReducer, placeInitialState);
  const [sensor, dispatchSensor] = useReducer(sensorReducer, sensorInitialState);
  const [airtable, dispatchAirtable] = useReducer(airtableReducer, getAirtableDataInitialState());

  const { sensorId }: { sensorId: string } = useParams();

  const handlePlaceOnSuccess = useCallback((placeData) => {
    dispatchPlace(fetchPlaceSuccessed(placeData));
  }, []);

  const handlePlaceOnError = useCallback((e) => {
    dispatchPlace(fetchPlaceFailed(e));
  }, []);

  const handleSensorOnSuccess = useCallback((sensorsData) => {
    dispatchSensor(fetchSensorSuccessed(sensorsData));
  }, []);

  const handleSensorOnError = useCallback((e) => {
    dispatchSensor(fetchSensorFailed(e));
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
    dispatchSensor(fetchSensorRequested());
    getSensor(sensorId, handleSensorOnSuccess, handleSensorOnError);
  }, [sensorId]);

  useEffect(() => {
    if (sensor.data) {
      dispatchPlace(fetchPlaceRequested());
      getPlace(sensor.data.placeId, handlePlaceOnSuccess, handlePlaceOnError);
    }
  }, [sensor.data]);

  return (
    <SensorView
      place={place}
      airtable={airtable}
      sensor={sensor}
    />
  );
}

export default Sensor;
