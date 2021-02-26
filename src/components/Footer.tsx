import React from 'react';
import { Link } from 'react-router-dom';
import {
  createStyles, Theme, WithStyles, withStyles,
} from '@material-ui/core/styles';

import { Typography } from 'libs/mui';
import { HELPFULPLACES_WEBSITE } from 'common/constants';

function Footer({ classes }: WithStyles) {
  return (
    <div className={classes.root}>
      <Typography className={classes.text}>
        This is an open-source prototype from the Digital Transparency in the Public Realm project.
        {' '}
        We may share feedback on this page with Helpful Places.
      </Typography>
      <Link to={HELPFULPLACES_WEBSITE}>
        <Typography className={classes.link}>
          LEARN MORE
        </Typography>
      </Link>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.custom.palette.background.main,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media print': {
      display: 'none',
    },
  },
  text: {
    color: '#515151',
    fontSize: '0.75rem',
    letterSpacing: '0.75px',
    textAlign: 'center',
  },
  link: {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    letterSpacing: '0.25px',
    marginTop: theme.spacing(1.25),
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: theme.custom.elements.link,
  },
});

export default withStyles(styles)(Footer);
