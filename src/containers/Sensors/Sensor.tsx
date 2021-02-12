/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { PlaceStateType } from 'reducers/place';

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
import { getAirtableSensorsGroupData } from 'selectors/sensor';
import { sensorsGroupNames, sensorsGroupLabels } from 'common/constants';

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

  const sensorsGroup = useMemo(() => Object
    .values(sensorsGroupNames)
    .map(
      (sensorGroup: string) => ({
        sensorGroup,
        label: sensorsGroupLabels[sensorGroup],
        options: getAirtableSensorsGroupData(
          sensorGroup, sensorId, sensor.data?.[sensorGroup], airtable.data,
        ),
      }),
    ), [sensorId, sensor.data, airtable.data]);

  const techType = sensorsGroup.find(
    ({ sensorGroup }) => sensorGroup === sensorsGroupNames.TECH_TYPE,
  );
  const purpose = sensorsGroup.find(
    ({ sensorGroup }) => sensorGroup === sensorsGroupNames.PURPOSE,
  );

  return (
    <SensorView
      place={place as PlaceStateType}
      sensor={sensor as SensorStateType}
      techType={techType}
      purpose={purpose}
      sensorsGroup={sensorsGroup}
    />
  );
}

export default Sensor;
