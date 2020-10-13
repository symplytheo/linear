import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#513dd3',
    },
    secondary: {
      main: '#2b2c2d',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#161718',
    },
    text: {
      primary: '#e6e8e7',
      secondary: '#adadad'
    }
  },
});

export default theme;