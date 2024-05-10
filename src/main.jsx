import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
