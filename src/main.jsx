import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routs/Routs.jsx';
import AuthProvider from './Authintication/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <HelmetProvider>
  <RouterProvider router={router} />
 </HelmetProvider>
  <ToastContainer></ToastContainer>
  </AuthProvider>
    
    
  

  </React.StrictMode>,
)
