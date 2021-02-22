import React from 'react';
import {
  createStyles, Theme, withStyles,
} from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { PlaceData } from 'common/types';
import {
  Divider, Typography, ArrowForwardIcon,
} from 'libs/mui';

interface Props {
  classes: any;
  place: PlaceData
}

function SensorPlace({ classes, place }: Props) {
  return (
    <div className={classes.root}>
      <Typography className={classes.name}>
        {place?.name}
      </Typography>
      <Typography className={classes.address}>
        {place?.address}
      </Typography>
      <Divider className={classes.divider} variant="inset" />
      <Typography>
        This location uses other types of technology
      </Typography>
      <Link to={`/places/${place?.id}`} className={classes.link}>
        <Typography className={classes.linkText} component="span">
          SEE ALL
        </Typography>
        <ArrowForwardIcon className={classes.highlight} />
      </Link>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.custom.sessions.sensor.place.background,
    color: theme.custom.sessions.sensor.place.color,
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(4),
  },
  name: {
    fontSize: '1.125rem',
    fontWeight: 500,
    letterSpacing: '0.75px',
  },
  address: {
    fontSize: '0.875rem',
    letterSpacing: '0.75px',
  },
  divider: {
    height: '2px',
    backgroundColor: theme.custom.sessions.sensor.place.highlight,
    marginBottom: theme.spacing(3),
    marginLeft: 0,
    marginTop: theme.spacing(),
    width: theme.spacing(5),
  },
  link: {
    alignItems: 'center',
    display: 'flex',
    marginTop: theme.spacing(),
    textDecoration: 'none',
  },
  linkText: {
    color: theme.custom.sessions.sensor.place.highlight,
    fontWeight: 500,
    letterSpacing: '0.25px',
    marginRight: theme.spacing(),
  },
  highlight: {
    color: theme.custom.sessions.sensor.place.highlight,
  },
});

export default withStyles(styles)(SensorPlace);
