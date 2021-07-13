import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './App.scss';
import { LayoutMain } from './layouts/LayoutMain';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { themeOptions } from './them';

const theme = unstable_createMuiStrictModeTheme(themeOptions);

//basename={process.env.PUBLIC_URL}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter >
        <LayoutMain />
      </HashRouter>
    </ThemeProvider>

  );
}

export default App;
