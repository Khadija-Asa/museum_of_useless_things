import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import UselessHall from './components/UselessHall';
import DoNotClick from './components/DoNotClick';
import EgoBooster from './components/EgoBooster';
import BoredPixels from './components/BoredPixels';
import RageButton from './components/RageButton';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <UselessHall /> 
  },
  { 
    path: '/do-not-click', 
    element: <DoNotClick /> 
  },
  { 
    path: '/ego-booster', 
    element: <EgoBooster /> 
  },
  { 
    path: '/bored-pixels', 
    element: <BoredPixels /> 
  },
  { 
    path: '/rage-button', 
    element: <RageButton /> 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
