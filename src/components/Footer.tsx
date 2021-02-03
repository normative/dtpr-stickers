import React from 'react';
import { Link } from 'react-router-dom';
import {
  createStyles, Theme, WithStyles, withStyles,
} from '@material-ui/core/styles';

import { Button, Typography } from 'libs/mui';

function Footer({ classes }: WithStyles) {
  return (
    <div className={classes.root}>
      <Typography align="center">
        This is an open-source prototype from the Digital Transparency in the Public Realm project.
      </Typography>
      <Link to="/" style={{ textDecoration: 'none', width: '100%', textAlign: 'center' }}>
        <Button style={{ backgroundColor: 'transparent', width: '100%' }} color="secondary">Learn more here</Button>
      </Link>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media print': {
      display: 'none',
    },
  },
});

export default withStyles(styles)(Footer);
