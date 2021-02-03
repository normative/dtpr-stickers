import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PlaceStateType } from 'reducers/place';
import { AirtableStateType } from 'reducers/airtable';

import { getSensor } from 'sideEffects/firebase';
import sensorReducer, {
  sensorInitialState,
  fetchSensorRequested,
  fetchSensorSuccessed,
  fetchSensorFailed,
  SensorStateType,
} from 'reducers/sensor';

import useReducerState from 'hooks/useReducerState';

import { AirtableContext } from 'context/airtable';
import { PlaceContext } from 'context/place';

import SensorView from 'components/Sensors/SensorView';

function Sensor() {
  const [sensor, sensorActions] = useReducerState(
    sensorReducer,
    sensorInitialState,
    fetchSensorRequested,
    fetchSensorSuccessed,
    fetchSensorFailed,
  );
  const [place, placeActions] = useContext(PlaceContext);
  const airtable = useContext(AirtableContext);
  const { sensorId }: { sensorId: string } = useParams();

  useEffect(() => {
    sensorActions.onRequest();
    getSensor(sensorId, sensorActions.onSuccess, sensorActions.onError);
  }, [sensorId]);

  useEffect(() => {
    if (sensor.data) {
      placeActions.onRequest(sensor.data.placeId);
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
