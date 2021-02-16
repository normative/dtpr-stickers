import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import sensorsReducer, {
  fetchSensorsFailed,
  fetchSensorsRequested,
  fetchSensorsSuccessed,
  sensorsInitialState,
  SensorsStateType,
} from 'reducers/sensors';
import { getSensors } from 'sideEffects/firebase';
import PlaceView from 'components/Places/PlaceView';
import { AirtableContext } from 'context/airtable';
import useReducerState from 'hooks/useReducerState';
import { AirtableStateType } from 'reducers/airtable';
import { PlaceContext } from 'context/place';
import { LinearProgress } from '@material-ui/core';

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

  if (!place.data || place.isFetching || !airtable.data || airtable.isFetching) {
    return <LinearProgress color="primary" />;
  }

  return (
    <PlaceView
      place={place.data}
    />
  );
}

export default Place;
