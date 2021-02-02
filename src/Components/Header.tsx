import React from 'react';
import {
  createStyles,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';

import {
  Toolbar,
  Typography,
  Button,
  AppBar,
} from 'libs/mui';

interface Props extends WithStyles<typeof styles> {}

function Header({ classes }: Props) {
  return (
    <AppBar className={classes.root} position="sticky">
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <Button
            href="/"
            color="inherit"
            disableFocusRipple
            disableRipple
            style={{ backgroundColor: 'transparent' }}
          >
            <Typography
              variant="h6"
              color="inherit"
              style={{ textTransform: 'none' }}
            >
              DTPR
            </Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

const styles = () => createStyles({
  root: {
    '@media print': {
      display: 'none',
    },
  },
});

export default withStyles(styles)(Header);
