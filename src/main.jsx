import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home';
import DontClick from './components/Dontclick';
import Compliments from './components/Compliments';
import Boredom from './components/Boredom';
import Ragebutton from './components/Ragebutton';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Home /> 
  },
  { 
    path: '/ne_clique_pas', 
    element: <DontClick /> 
  },
  { 
    path: '/machine_a_compliments', 
    element: <Compliments /> 
  },
  { 
    path: '/qui_s_ennuie', 
    element: <Boredom /> 
  },
  { 
    path: '/rage_button', 
    element: <Ragebutton /> 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
