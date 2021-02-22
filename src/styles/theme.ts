import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { common } from '@material-ui/core/colors';
import custom from './custom';

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
      fonts: {
        primary: {
          m: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
          },
        },
        secondary: {
          m: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
          },
          s: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
          },
          xs: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
          },
        },
      }
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
      fonts?: {
        primary?: {
          m?: {
            fontSize?: string,
            fontFamily?: string,
            letterSpacing?: string,
          },
        },
        secondary?: {
          m?: {
            fontSize?: string,
            fontFamily?: string,
            letterSpacing?: string,
          },
          s?: {
            fontSize?: string,
            fontFamily?: string,
            letterSpacing?: string,
          },
          xs?: {
            fontSize?: string,
            fontFamily?: string,
            letterSpacing?: string,
          },
        },
      },
    };
  }
}

const themeObject = process.env.REACT_APP_THEME
  ? JSON.parse(process.env.REACT_APP_THEME) : {
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
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
    custom,
  };
const theme = createMuiTheme(themeObject);

export default theme;
