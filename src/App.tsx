import React from 'react';
import ReactGA from 'react-ga';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { common } from '@material-ui/core/colors';
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
import { AirtableProvider } from 'context/airtable';
import { PlaceProvider } from 'context/place';
import { HELPFULPLACES_WEBSITE } from 'common/constants';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY || '');
ReactGA.set({ anonymizeIp: true });

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#001B31',
      // dark: will be calculated from palette.primary.main,
      contrastText: 'white',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: common.white,
    },
  },
  typography: {
    fontFamily: ['Google Sans', 'Roboto', '-apple-system'].join(','),
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AirtableProvider>
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
      </AirtableProvider>
    </MuiThemeProvider>
  );
}

export default App;
