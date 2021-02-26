import { common } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import custom from './custom';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#001B31',
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
      primary: custom.palette.text.main,
      secondary: custom.palette.text.primary,
      // disabled: string;
      hint: custom.palette.text.light,
    },
  },
  typography: {
    fontFamily: custom.fonts.primary.m.fontFamily,
  },
  custom,
});

export default theme;
