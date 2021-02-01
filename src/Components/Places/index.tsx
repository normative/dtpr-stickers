import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import PlaceView from './PlaceView';
import { LngLat } from 'mapbox-gl';

export interface PlaceData {
  name: string,
  lngLat: LngLat,
  address: string, // mapbox place_name
  sensors: { [sensorId: string]: boolean }
  admins: { [uid: string]: boolean },
}

function Places() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/:placeId`} component={PlaceView} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Places;
