import React from 'react';
import Button from '@material-ui/core/Button';
import {
  createStyles, Theme, WithStyles, withStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function Footer({ classes }: WithStyles) {
  return (
    <div className={classes.root}>
      <Typography align="center">
        This is an open-source prototype from the Digital Transparency in the Public Realm project.
      </Typography>
      <Button href="/" style={{ backgroundColor: 'transparent' }} color="secondary">Learn more here</Button>
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
