import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import IndexPage from "./pages/IndexPage.js"
import BuildPage from "./pages/BuildPage.js"
import ListPage from "./pages/ListPage.js"
import DonationPage from "./pages/DonationPage.js"
import AboutPage from "./pages/AboutPage.js"
import ErrorPage from "./pages/ErrorPage.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage></IndexPage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/build",
    element: <BuildPage></BuildPage>,
  },
  {
    path: "/list",
    element: <ListPage></ListPage>,
  },
  {
    path: "/donation",
    element: <DonationPage></DonationPage>,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  }
]);

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

