import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Dashboard from "./components/Dashboard.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },

      {
        path: "reservations",
        element: (
          <>
            <p>this is reservations page</p>
            <Link to={"/"}>Dashboard</Link>
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
