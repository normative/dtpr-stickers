import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import PlaceView from '../../Components/Places/PlaceView';

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
