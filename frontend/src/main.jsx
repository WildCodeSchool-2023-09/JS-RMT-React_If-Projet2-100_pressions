import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Basket from "./pages/Basket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/basket",
    element: <Basket />,
    loader: () => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/basket?beers=1|5|25`)
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
