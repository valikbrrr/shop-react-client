import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainRoutes } from "./MainRoutes";
import AuthProvider from "./providers/auth/AuthProvider";
import Toast from "./components/ui/toast/Toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <MainRoutes />
      <Toast />
    </AuthProvider>
  </StrictMode>
);
