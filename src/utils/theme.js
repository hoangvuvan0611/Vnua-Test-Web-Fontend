import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import '@fontsource/roboto'; // Import font Roboto

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#F5F5F5',         // Used elsewhere
    },
    success: {
      main: '#11C6A9',         // custom button color (seafoam green)
      contrastText: '#ffffff', // custom button text (white)
    },
    error: {
      main: '#C6112E',         // custom button color (red)
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  }
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>,
  document.getElementById('root')
);

export default theme;