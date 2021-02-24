import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import { Typography } from 'libs/mui';

interface Props {
  code: string;
  message: string;
  classes: any;
}

function NotFound({ classes, code, message }: Props) {
  return (
    <div className={classes.root}>
      <Typography className={classes.errorCode} variant="h2">
        {code}
      </Typography>
      <Typography className={classes.errorMessage}>
        {message}
      </Typography>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    paddingTop: theme.spacing(2),
    height: '85vh',
    [theme.breakpoints.up('md')]: {
      maxWidth: theme.breakpoints.values.md,
    },
  },
  errorCode: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#828282',
  },
  errorMessage: {
    fontSize: '1.5rem',
    color: '#828282',
  },
});

export default withStyles(styles)(NotFound);
