import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Navigate, RouterProvider,BrowserRouter, Route, Routes} from "react-router-dom";
import App from './App.jsx'
import { Login } from './pages/Login/Login.jsx';
import './index.css'
import { Logo } from './Component/Logo/Logo.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import { SignUp } from './pages/SignUp/SignUp.jsx';
import { Home } from './pages/Home/Home.jsx';
import { requireAuth } from './Component/requireAuth/requireAuth.jsx';
import { User } from './pages/User/User.jsx';
import { Provider } from 'react-redux';
import store from './reduxConfig.js';

const isAuthenticated = false; // Replace with your authentication logic


const router = createBrowserRouter([
  
  {
    path: "/",
    element:<div>
    <Logo/> <Home/> 
    
    </div>,
    errorElement: <div> <Logo/> <ErrorPage/> </div> 
  },

  {
    path: "/Login",
    element:<div>
      <Logo/> <Login/>
    </div>,
    errorElement: <div> <Logo/> <ErrorPage/> </div> 
  },

  {
    path: "/SignUp",
    element:<div>
      <Logo/> <SignUp />
    </div>,
    errorElement: <div> <Logo/> <ErrorPage/> </div> //remplacer error page par postId
  },

  {
    path: "/User",
    element:<div>
      <Logo/> <User />
    </div>,
    errorElement: <div> <Logo/> <ErrorPage/> </div> 
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
  </Provider>,
)
