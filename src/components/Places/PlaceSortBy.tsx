import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import { Button, Divider, Typography } from 'libs/mui';
import { sensorsGroupLabels, sensorsGroupNames } from 'common/constants';

const TAXONOMY_PROPS = [
  sensorsGroupNames.DATA_TYPE,
  sensorsGroupNames.PURPOSE,
  sensorsGroupNames.SYSTEMS,
  sensorsGroupNames.TECH_TYPE,
];

interface Props {
  classes: any;
  onClick: (taxonomyProp: string) => void;
  selected: string;
}

function PlaceView({
  classes,
  onClick,
  selected,
}: Props) {
  return (
    <div className={classes.overlay}>
      <div className={classes.root}>
        <Typography className={classes.header}>
          Sort by
        </Typography>
        <Divider variant="fullWidth" />
        <div className={classes.options}>
          {TAXONOMY_PROPS.map((taxonomyProp) => (
            <Typography
              className={`${classes.option} ${selected === taxonomyProp && classes.selected}`}
              role="button"
              onClick={() => { onClick(taxonomyProp); }}
              key={taxonomyProp}
            >
              {sensorsGroupLabels[taxonomyProp]}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    bottom: 0,
    display: 'flex',
    height: '100%',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  root: {
    backgroundColor: 'white',
    bottom: 0,
    height: 'fit-content',
    left: 0,
    position: 'absolute',
    width: '100%',
  },
  header: {
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  option: {
    paddingBottom: theme.spacing(),
    justifyContent: 'flex-start',
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  selected: {
    color: '#45789C',
  },
  options: {
    padding: theme.spacing(4),
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export default withStyles(styles)(PlaceView);
