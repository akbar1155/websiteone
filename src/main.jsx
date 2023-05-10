import React from "react";
import ReactDOM from "react-dom/client";
import About from "../pages/About/about";
import LoginPage from "../pages/registry/loginpage";
import Contact from "../pages/Contact/contact";
import Home from "../pages/Home/home";
import Portfolia from "../pages/Portfolia/portfolia";
import Services from "../pages/Services/services";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,  
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/portfolia",
    element: <Portfolia />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
