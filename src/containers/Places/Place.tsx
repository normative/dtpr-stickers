import React, { useContext, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import sensorsReducer, {
  fetchSensorsFailed,
  fetchSensorsRequested,
  fetchSensorsSuccessed,
  sensorsInitialState,
} from 'reducers/sensors';
import { getSensors } from 'sideEffects/firebase';
import PlaceView from 'components/Places/PlaceView';
import { AirtableContext } from 'context/airtable';
import useReducerState from 'hooks/useReducerState';
import { PlaceContext } from 'context/place';
import { LinearProgress } from '@material-ui/core';
import { groupSensorsByTaxonomyPropValues } from 'presenters/place';
import { SensorsGroupByTaxonomyPropValues } from 'common/types';

function Place() {
  const [sensors, sensorsActions] = useReducerState(
    sensorsReducer,
    sensorsInitialState,
    fetchSensorsRequested,
    fetchSensorsSuccessed,
    fetchSensorsFailed,
  );
  const [place, placeActions] = useContext(PlaceContext);
  const airtable = useContext(AirtableContext);
  const { placeId }: { placeId: string } = useParams();

  useEffect(() => {
    placeActions.onRequest(placeId);
  }, []);

  useEffect(() => {
    if (place.data) {
      sensorsActions.onRequest();
      getSensors(place.data, sensorsActions.onSuccess, sensorsActions.onError);
    }
  }, [place.data]);

  const groupedSensors: SensorsGroupByTaxonomyPropValues = useMemo(() => {
    if (!sensors.data) return {};
    return groupSensorsByTaxonomyPropValues(sensors.data, 'techType');
  }, [sensors.data]);

  if (!place.data
    || place.isFetching
    || !sensors.data
    || sensors.isFetching
    || !airtable.data
    || airtable.isFetching
  ) {
    return <LinearProgress color="primary" />;
  }

  return (
    <PlaceView
      place={place.data}
      taxonomySensors={groupedSensors?.taxonomyProp}
      taxonomySensorsSortedIds={groupedSensors?.taxonomyPropValues}
      otherSensors={groupedSensors?.Others}
    />
  );
}

export default Place;
