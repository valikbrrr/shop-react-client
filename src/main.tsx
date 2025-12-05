import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainRoutes } from "./MainRoutes";
import AuthProvider from "./providers/auth/AuthProvider";
import Toast from "./components/ui/toast/Toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <MainRoutes />
        <Toast />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
