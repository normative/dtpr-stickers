import { Option } from 'common/types';
import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { showPlaceholderOnImgError } from 'common/helpers';

interface Props {
  option: Option | undefined;
  classes: any;
  placeholder: string,
  imgSrc?: string,
}

function SensorBadge({
  option, classes, placeholder, imgSrc,
}: Props) {
  if (!option) return <></>;

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={imgSrc || (option.iconShortname && `/images/${option.iconShortname}.svg`) || placeholder}
        alt="purpose badge icon"
        onError={showPlaceholderOnImgError(placeholder)}
      />
      <Typography variant="subtitle2">
        {option.name}
      </Typography>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  root: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    height: '48px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing(),
  },
});

SensorBadge.defaultProps = {
  imgSrc: '',
};

export default withStyles(styles)(SensorBadge);
