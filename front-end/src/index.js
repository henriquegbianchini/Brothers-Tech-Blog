import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './routes/Home/index.js';
import Articles from './routes/Articles/index.js';
import Contact from './routes/Contact/index.js';
import About from './routes/About/index.js';
import ErrorPage from './routes/Errors/index.js';
import Dashboard from './routes/Dashboad';
import Login from './routes/Login';


const router = createBrowserRouter([
  {
   path: "/",
   element: <App />,
   errorElement: <ErrorPage/>,
   children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contato",
      element: <Contact />,
    },
    {
      path: "/sobre",
      element: <About />,
    },
    {
      path: "/artigos",
      element: <Articles />,
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },
    {
      path: "/login",
      element: <Login />,
    },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
