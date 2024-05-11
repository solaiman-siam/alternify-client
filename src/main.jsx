import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import AuthProviderComponents from "./AuthProvider/AuthProviderComponents.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviderComponents>
        <RouterProvider router={router}></RouterProvider>
      </AuthProviderComponents>
    </QueryClientProvider>
  </React.StrictMode>
);
