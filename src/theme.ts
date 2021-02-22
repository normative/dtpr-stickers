import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { common } from '@material-ui/core/colors';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: {
      highlight: string,
      link: string,
      sessions: {
        sensor: {
          feedback: {
            border: string,
            background: string,
          },
          place: {
            background: string,
            color: string,
            highlight: string,
          },
          faq: {
            fontSize: string,
            fontWeight: number,
            textTransform: React.CSSProperties['textTransform'],
          },
        },
      },
    };
  }

  interface ThemeOptions {
    custom?: {
      highlight?: string,
      link?: string,
      sessions?: {
        sensor?: {
          feedback?: {
            border?: string,
            background?: string,
          },
          place?: {
            background?: string,
            color?: string,
            highlight?: string,
          },
          faq?: {
            fontSize?: string,
            fontWeight?: number,
            textTransform?: React.CSSProperties['textTransform'],
          },
        },
      },
    };
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#091F2F',
    },
    secondary: {
      main: '#45789C',
    },
    background: {
      default: common.white,
    },
    text: {
      primary: '#58585B',
      secondary: common.black,
      // disabled: string;
      hint: '#828282',
    },
  },
  typography: {
    fontFamily: ['Google Sans', 'Roboto', '-apple-system'].join(','),
  },
  custom: {
    link: '#288BE4',
    sessions: {
      sensor: {
        feedback: {
          border: '#BFBFBF',
          background: 'white',
        },
        place: {
          background: '#001B31',
          color: 'white',
          highlight: '#FB4D42',
        },
        faq: {
          fontSize: '0.875rem',
          fontWeight: 300,
          textTransform: 'uppercase',
        },
      },
    },
  },
});
export default theme;
