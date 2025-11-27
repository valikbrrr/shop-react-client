import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainRoutes } from "./MainRoutes";
import AuthProvider from "./providers/auth/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <MainRoutes />
    </AuthProvider>
  </StrictMode>
);