import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebaseui from 'firebaseui'

import firebase from '../libs/firebase';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        // TODO: implement whitelist
        // restrict to display of swl emails only
        // hd: 'sidewalklabs.com',
        // Forces account selection even when one account
        // is available.
        prompt: 'select_account',
      }
    },
  ],
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
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

