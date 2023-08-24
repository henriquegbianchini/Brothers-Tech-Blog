import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './routes/Home.js';
import Articles from './routes/Articles.js';
import Contact from './routes/Contact.js';
import About from './routes/About';
import ErrorPage from './routes/ErrorPage';

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
