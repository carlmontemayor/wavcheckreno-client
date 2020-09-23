// Import Material UI theme
import { createMuiTheme } from '@material-ui/core/styles';

// Import Material UI colors
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const AppTheme = createMuiTheme({
  palette: {
    common: {
      black: 'black',
      white: 'white',
    },
    primary: {
      main: '#21b287',
    },
    secondary: {
      main: '#fab7c6',
      light: '#f68ca1',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000',
    },
    text: {
      primary: '#fff',
      secondary: '#000',
    },
  },
  typography: {
    fontFamily: 'Avenir',
    h1: {
      fontWeight: 900,
      fontSize: '5rem',
    },
    h2: {
      fontWeight: 800,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 900,
      fontSize: '1rem',
    },
    h6: {
      fontWeight: 900,
      fontSize: '1rem',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true,
    },
  },
});

export default AppTheme;
