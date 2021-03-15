import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

import palette from './palette';
import typography from './typography';

const defaultTheme = createMuiTheme();

const theme = responsiveFontSizes(
  createMuiTheme({
    palette,
    typography: {
      ...typography,
      fontFamily: 'Montserrat',
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '::-moz-selection': {
            color: palette.white,
            background: palette.primary.main,
          },
          '::selection': {
            color: palette.white,
            background: palette.primary.main,
          },
        },
      },
      MuiTextField: {
        root: {
          backgroundColor: '#efefef',
        },
      },
      MuiButton: {
        root: {
          borderRadius: 'none',
          fontSize: '0.8rem',
          transition: 'none'
        },
        outlinedSizeLarge: {
          fontSize: '0.8rem',
        },
        sizeLarge: {
          padding: defaultTheme.spacing(2, 2)
        },
        containedSecondary: {
          color: 'white',
        },
        outlinedSecondary: {
          color: 'white',
          borderColor: 'white',
          '&:hover': {
            color: palette.brand.primary,
            borderColor: palette.brand.primary,
          },
        },
      },
    },
  }),
);

export default theme;
