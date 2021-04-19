import { TaxonomyDetails } from 'common/types';
import React from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { getIconPlaceholder, getIconUrl, showPlaceholderOnImgError } from 'common/helpers';

interface Props {
  option: TaxonomyDetails | undefined;
  classes: any;
  placeholder: string,
  imgSrc?: string,
}

function SensorBadge({
  option, classes, placeholder, imgSrc,
}: Props) {
  if (!option) return <></>;

  const placeholderIcon = getIconPlaceholder(placeholder);
  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={imgSrc || (option.icon && getIconUrl(option.icon)) || placeholderIcon}
        alt="purpose badge icon"
        onError={showPlaceholderOnImgError(placeholderIcon)}
      />
      <Typography variant="subtitle2" className={classes.name}>
        {option.title}
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
  name: {
    ...theme.custom.fonts.secondary.xs,
    color: theme.custom.sensor.badge,
  },
});

SensorBadge.defaultProps = {
  imgSrc: '',
};

export default withStyles(styles)(SensorBadge);
