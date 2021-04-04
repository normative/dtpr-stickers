import React, { memo } from 'react';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { getIconUrl } from 'common/helpers';
import SvgText from './SvgText';

const THEME = {
  blue: {
    hexColor: '#36B2E6',
    color: 'black',
    folder: 'ic_black',
  },
  yellow: {
    hexColor: '#FFDD00',
    color: 'black',
    folder: 'ic_black',
  },
  black: {
    hexColor: 'black',
    color: 'white',
    folder: 'ic_white',
  },
  white: {
    hexColor: '#FFFFFF',
    color: 'black',
    folder: 'ic_black',
  },
};

interface Props {
  height?: number;
  variant?: string;
  taxonomyProp: string;
  icon: string;
  children: string;
  classes: any;
}

function Sticker({
  height, variant, taxonomyProp, icon, children, classes,
}: Props) {
  if (!taxonomyProp || !icon) {
    return <></>;
  }

  const width = height * 0.8787;
  const textPosition = { y: '62%' };
  const exportName = children.replace(/\s/g, '-');
  const iconHref = getIconUrl(`${taxonomyProp}/${THEME[variant].folder}/${icon}`);
  return (
    <svg
      className={classes.root}
      width={width}
      height={height}
      viewBox="0 0 232 264"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      data-export-badge={`sticker-${exportName}`}
    >
      <svg data-export-hexagon={`hexagon-${variant}`} xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon id="Star" fill={THEME[variant].hexColor} points="116 264 1.6846467 198 1.6846467 66 116 0 230.315353 66 230.315353 198" />
        </g>
      </svg>
      <svg
        data-export-icon-text={`icon-text-${exportName}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 232 264"
      >
        <image href={iconHref} transform="translate(50 40) scale(5.5)" />
        <SvgText
          style={{
            color: THEME[variant].color,
          }}
          width={width}
          height={height}
          y={textPosition.y}
        >
          {children}
        </SvgText>
      </svg>
    </svg>
  );
}

Sticker.defaultProps = {
  height: 264,
  variant: 'white',
};

const styles = (theme: Theme) => createStyles({
  root: {
    margin: theme.spacing(),
  },
});

export default withStyles(styles)(memo(Sticker));
