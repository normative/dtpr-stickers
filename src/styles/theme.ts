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
      primary: common.black,
      secondary: '#4C4C4C',
      // disabled: string;
      hint: '#828282',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  custom,
});

export default theme;
