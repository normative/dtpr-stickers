import React, { useRef } from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';

import {
  Divider, Slide, Typography,
} from 'libs/mui';
import { taxonomyPropLabels, taxonomyProps } from 'common/constants';
import Fade from 'components/Fade';

const TAXONOMY_PROPS = [
  taxonomyProps.DATA_TYPE,
  taxonomyProps.PURPOSE,
  taxonomyProps.SYSTEMS,
  taxonomyProps.TECH_TYPE,
];

interface Props {
  classes: any;
  onSelect: (taxonomyProp: string) => void;
  selected: string;
  visible: boolean;
  onHide: () => void;
}

function PlaceView({
  classes,
  onSelect,
  selected,
  visible,
  onHide,
}: Props) {
  const overlayRef = useRef(null);
  return (
    <Fade in={visible} timeout={300} innerRef={overlayRef}>
      <div className={classes.overlay} onClick={onHide} aria-hidden="true" ref={overlayRef}>
        <Slide direction="up" in={visible} mountOnEnter unmountOnExit timeout={150}>
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
                  onClick={() => { onSelect(taxonomyProp); }}
                  key={taxonomyProp}
                >
                  {taxonomyPropLabels[taxonomyProp]}
                </Typography>
              ))}
            </div>
          </div>
        </Slide>
      </div>
    </Fade>
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
    color: theme.custom.place.sort.header,
    ...theme.custom.fonts.primary.m,
  },
  option: {
    color: theme.custom.place.sort.option,
    paddingBottom: theme.spacing(),
    justifyContent: 'flex-start',
    ...theme.custom.fonts.primary.m,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  selected: {
    color: theme.custom.place.sort.selected,
  },
  options: {
    padding: theme.spacing(4),
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

export default withStyles(styles)(PlaceView);
