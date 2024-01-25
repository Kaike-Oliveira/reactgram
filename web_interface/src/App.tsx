// Core
import React from 'react';

// Libraries
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Routes
import routes from './Routes';

// Config
import AppTheme from './config/theme';

// Style
import GlobalStyle from './style/globalStyles';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={AppTheme.color.default}>
        <RouterProvider router={routes} />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
