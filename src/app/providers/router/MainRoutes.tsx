import { useAuth } from "@/entities/auth";
import { routes } from "@/shared/config";
import { Loader } from "@/shared/ui/loader";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { MainLayout } from "@/widgets";

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
