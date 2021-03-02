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
      <Typography className={classes.paragraph}>
        This location uses other types of technology
      </Typography>
      <Link to={`/places/${place?.id}`} className={classes.link}>
        <Typography className={classes.linkText} component="span">
          SEE ALL
        </Typography>
        <ArrowForwardIcon className={classes.linkIcon} />
      </Link>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.custom.sensor.place.backgroundColor,
    color: theme.custom.sensor.place.paragraph,
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(4),
  },
  name: {
    fontWeight: 500,
    ...theme.custom.fonts.primary.l,
  },
  address: {
    ...theme.custom.fonts.secondary.s,
    marginTop: theme.spacing(),
  },
  divider: {
    height: '2px',
    backgroundColor: theme.custom.sensor.place.divider,
    marginBottom: theme.spacing(3),
    marginLeft: 0,
    marginTop: theme.spacing(),
    width: theme.spacing(5),
  },
  paragraph: {
    ...theme.custom.fonts.secondary.m,
  },
  link: {
    alignItems: 'center',
    display: 'flex',
    marginTop: theme.spacing(),
    textDecoration: 'none',
  },
  linkText: {
    color: theme.custom.sensor.place.link,
    fontWeight: 700,
    letterSpacing: '0.25px',
    marginRight: theme.spacing(),
  },
  linkIcon: {
    color: theme.custom.sensor.place.link,
    fontWeight: 700,
  },
});

export default withStyles(styles)(SensorPlace);
