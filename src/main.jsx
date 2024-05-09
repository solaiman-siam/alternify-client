import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProviderComponents from "./AuthProvider/AuthProviderComponents.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviderComponents>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviderComponents>
  </React.StrictMode>
);
