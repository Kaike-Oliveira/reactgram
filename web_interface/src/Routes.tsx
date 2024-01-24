// Core
import React from 'react';

// Libraries
import { createBrowserRouter } from 'react-router-dom';

// Screens
import Login from './screens/Login';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
]);

export default routes;
