import React, { useContext, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { getSensor } from 'sideEffects/firebase';
import sensorReducer, {
  sensorInitialState,
  fetchSensorRequested,
  fetchSensorSuccessed,
  fetchSensorFailed,
} from 'reducers/sensor';

import useReducerState from 'hooks/useReducerState';

import { AirtableContext } from 'context/airtable';
import { PlaceContext } from 'context/place';

import SensorView from 'components/Sensors/SensorView';
import { sensorsGroupNames } from 'common/constants';
import { LinearProgress } from '@material-ui/core';
import { prepareSensorsGroups } from 'presenters/sensor';

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

  const sensorsGroup = useMemo(() => {
    if (!sensor.data || !airtable.data) return [];
    return prepareSensorsGroups(sensorId, sensor.data, airtable.data);
  }, [sensorId, sensor.data, airtable.data]);

  const techType = useMemo(() => sensorsGroup.find(
    ({ sensorGroup }) => sensorGroup === sensorsGroupNames.TECH_TYPE,
  ), [sensorsGroup]);

  const purpose = useMemo(() => sensorsGroup.find(
    ({ sensorGroup }) => sensorGroup === sensorsGroupNames.PURPOSE,
  ), [sensorsGroup]);

  if (!sensor.data || sensor.isFetching || !airtable.data || airtable.isFetching) {
    return <LinearProgress color="secondary" />;
  }

  return (
    <SensorView
      place={place.data}
      sensor={sensor.data}
      techType={techType}
      purpose={purpose}
      sensorsGroup={sensorsGroup}
    />
  );
}

export default Sensor;
