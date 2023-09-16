import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from "./MoviePage.jsx";
import InvalidPage from "./InvalidPage.jsx";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/movie/:movieId", element: <MoviePage /> },
  { path: "*", element: <InvalidPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer theme="colored" hideProgressBar={true} transition={Zoom} />
  </React.StrictMode>
);
