import React from 'react';
import SensorPrintView from './SensorPrintView';
import SensorView from './SensorView';
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

export interface SensorData {
  placeId: string,
  name: string,
  headline: string,
  description: string
  accountable: string,
  accountableDescription: string,
  purpose: string[],
  techType: string[],
  dataType: string[],
  dataProcess: string[],
  access: string[],
  storage: string[],
  phone: string,
  chat: string,
  email: string,
  onsiteStaff: boolean,
  logoRef: string,
  sensorImageRef: string,
}

function Sensors() {

  const match = useRouteMatch();
  debugger;
  return (
    <Switch>
      <Route exact path={`${match.path}/:sensorId/print`} component={SensorPrintView} />
      <Route exact path={`${match.path}/:sensorId`} component={SensorView} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Sensors;
