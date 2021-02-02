import React from 'react';
import SensorPrintView from './SensorPrintView';
import SensorView from './SensorView';
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

function Sensors() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}/:sensorId/print`} component={SensorPrintView} />
      <Route exact path={`${match.path}/:sensorId`} component={SensorView} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Sensors;
