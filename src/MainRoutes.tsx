import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import ProtectedRoute from "./navigation/ProtectedRoute";
import { routes } from "./navigation/routes.const";
import MainLayout from "@/components/layouts/MainLayout/MainLayout";
import Loader from "./components/ui/Loader";

export const MainRoutes = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={
              route.name === "Auth" ? (
                user ? (
                  <Navigate to="/" replace />
                ) : (
                  <route.component />
                )
              ) : (
                <ProtectedRoute>
                  <MainLayout>
                    <route.component />
                  </MainLayout>
                </ProtectedRoute>
              )
            }
          />
        ))}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
