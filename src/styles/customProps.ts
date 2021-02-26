declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    custom: {
      palette: {
        header: {
          light: string,
          main: string,
          dark: string,
        },
        paragraph: {
          light: string,
          main: string,
          dark: string,
        },
        background: {
          light: string,
          main: string,
          primary: string,
          secondary: string,
        },
        text: {
          primary: string,
          secondary: string,
          contrast: string,
          dark: string,
          main: string,
          light: string,
        },
      },
      contrast: {
        header: string,
        paragraph: string,
        background: string,
        text: string,
        link: string,
      },
      elements: {
        divider: string,
        cardStroke: string,
        link: string,
      },
      fonts: {
        primary: {
          l: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
          m: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
          s: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
          xs: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
        },
        secondary: {
          m: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
          s: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
          xs: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
        },
      },
    };
  }

  interface ThemeOptions {
    custom?: {
      palette: {
        header: {
          light: string,
          main: string,
          dark: string,
        },
        paragraph: {
          light: string,
          main: string,
          dark: string,
        },
        background: {
          light: string,
          main: string,
          primary: string,
          secondary: string,
        },
        text: {
          primary: string,
          secondary: string,
          contrast: string,
          dark: string,
          main: string,
          light: string,
        },
      },
      contrast: {
        header: string,
        paragraph: string,
        background: string,
        text: string,
        link: string,
      },
      elements: {
        divider: string,
        cardStroke: string,
        link: string,
      },
      fonts: {
        primary: {
          l: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
          m: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
          s: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
          xs: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
        },
        secondary: {
          m: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
          s: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
          xs: {
            fontSize: string,
            fontFamily: string,
            letterSpacing: string,
            lineHeight: string,
          },
        },
      },
    };
  }
}

export default {};
