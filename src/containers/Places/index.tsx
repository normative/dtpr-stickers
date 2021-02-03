import React from 'react';
import {
  Redirect, Route, Switch, useRouteMatch,
} from 'react-router-dom';

import Place from './Place';

function Places() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/:placeId`} component={Place} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Places;
