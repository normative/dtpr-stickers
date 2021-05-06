import { useGAPageView } from 'libs/ga';
import React from 'react';
import {
  Redirect, Route, Switch, useRouteMatch,
} from 'react-router-dom';

import Sensor from './Sensor';
import SensorPrint from './SensorPrint';

function Sensors() {
  const match = useRouteMatch();
  useGAPageView();
  return (
    <Switch>
      <Route exact path={`${match.path}/:sensorId/print`} component={SensorPrint} />
      <Route exact path={`${match.path}/:sensorId`} component={Sensor} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Sensors;
