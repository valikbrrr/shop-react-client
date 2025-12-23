import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainRoutes } from "./MainRoutes";
import AuthProvider from "./providers/auth/AuthProvider";
import Toast from "./components/ui/toast/Toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Redux imports
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <MainRoutes />
            <Toast />
          </AuthProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
