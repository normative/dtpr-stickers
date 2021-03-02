import React from 'react';
import ReactGA from 'react-ga';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Places from 'containers/Places';
import Sensors from 'containers/Sensors';

import Footer from 'components/Footer';
import { PlaceProvider } from 'context/place';
import { HELPFULPLACES_WEBSITE } from 'common/constants';
import theme from 'styles/theme';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY || '');
ReactGA.set({ anonymizeIp: true });

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <PlaceProvider>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                window.location.href = HELPFULPLACES_WEBSITE;
                return false;
              }}
            />
            <Route path="/sensors" component={Sensors} />
            <Route path="/places" component={Places} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Router>
      </PlaceProvider>
    </MuiThemeProvider>
  );
}

export default App;
