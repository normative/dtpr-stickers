import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import firebase from '../libs/firebase';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/places',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    margin: 'auto',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      maxWidth: 'calc(100% - 167px)',
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
});

class Authentication extends Component<any, any> {
  render() {
    const firebaseAuth = firebase.auth()
    if (firebaseAuth.currentUser) return <Redirect to='/' />

    return (
      <div className={this.props.classes.root}>
        <Typography>Authentication is limited to Sidewalk Labs staff, for the purpose of maintaining technology descriptions at 307. If you are interested in using DTPR for your space, shoot a note to <a href="mailto:someone@yoursite.com">dtpr-hello@sidewalklabs.com</a>.</Typography>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
      </div>
    );
  }
}

export default withStyles(styles)(Authentication);

