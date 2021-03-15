import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

const brand = {
  dark: '#101820',
  primary: '#0092BC',
  secondary: '#B7BF10',
  darkGrey: '#53565A',
  lightGrey: '#D9E1E2',
  lightBlue: '#77C5D5',
};

export default {
  black,
  white,
  brand,
  alternate: 'rgb(247, 249, 250)',
  primary: {
    main: brand.primary,
  },
  secondary: {
    main: brand.secondary,
  },
  text: {
    primary: brand.dark,
    secondary: brand.darkGrey,
    link: brand.primary,
  },
  background: {
    default: '#FFFFFF',
    paper: white,
    footer: brand.primary,
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
};
