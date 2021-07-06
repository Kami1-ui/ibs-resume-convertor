import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { LayoutMain } from './layouts/LayoutMain';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { themeOptions } from './them';

const theme = unstable_createMuiStrictModeTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <LayoutMain />
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
