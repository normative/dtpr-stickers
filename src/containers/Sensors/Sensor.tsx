import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import placeReducer, {
  fetchPlaceFailed, placeInitialState, fetchPlaceRequested, fetchPlaceSuccessed, PlaceStateType,
} from 'reducers/place';
import { getPlace, getSensor } from 'sideEffects/firebase';
import sensorReducer, {
  sensorInitialState,
  fetchSensorRequested,
  fetchSensorSuccessed,
  fetchSensorFailed,
  SensorStateType,
} from 'reducers/sensor';

import { AirtableContext } from 'context/airtable';
import useReducerState from 'hooks/useReducerState';
import SensorView from 'components/Sensors/SensorView';
import { AirtableStateType } from 'reducers/airtable';

function Sensor() {
  const [place, placeActions] = useReducerState(
    placeReducer, placeInitialState, fetchPlaceRequested, fetchPlaceSuccessed, fetchPlaceFailed,
  );
  const [sensor, sensorActions] = useReducerState(
    sensorReducer,
    sensorInitialState,
    fetchSensorRequested,
    fetchSensorSuccessed,
    fetchSensorFailed,
  );
  const airtable = useContext(AirtableContext);
  const { sensorId }: { sensorId: string } = useParams();

  useEffect(() => {
    sensorActions.onRequest();
    getSensor(sensorId, sensorActions.onSuccess, sensorActions.onError);
  }, [sensorId]);

  useEffect(() => {
    if (sensor.data) {
      placeActions.onRequest();
      getPlace(sensor.data.placeId, placeActions.onSuccess, placeActions.onError);
    }
  }, [sensor.data]);

  return (
    <SensorView
      place={place as PlaceStateType}
      airtable={airtable as AirtableStateType}
      sensor={sensor as SensorStateType}
    />
  );
}

export default Sensor;
