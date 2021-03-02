import { common } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import custom from './custom';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: custom.header,
      // dark: will be calculated from palette.primary.main,
      contrastText: 'white',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: common.white,
    },
    text: {
      primary: custom.sensor.paragraph,
    },
  },
  typography: {
    fontFamily: custom.fonts.primary.m.fontFamily,
  },
  custom,
});

export default theme;
