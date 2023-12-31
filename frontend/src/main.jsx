import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

import App from "./App";
import ContactPage from "./pages/ContactPage";
import Basket from "./pages/Basket";
import Beers from "./pages/Beers";

import { BeerProvider } from "./contexts/context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/beers`)
        .then((response) => {
          return response.data;
        });
    },
  },
  {
    path: "/beers/:id",
    element: <Beers />,
    loader: ({ params }) => {
      return axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/beers/${params.id}`)
        .then((response) => {
          return response.data;
        });
    },
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BeerProvider>
      <RouterProvider router={router} />
    </BeerProvider>
  </React.StrictMode>
);
