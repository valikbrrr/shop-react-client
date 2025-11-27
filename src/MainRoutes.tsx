// MainRoutes.tsx
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "./components/screens/home/Home";
import Auth from "./components/screens/auth/Auth";
import { useAuth } from "@/hooks/useAuth";
import ProtectedRoute from "./navigation/ProtectedRoute";

export const MainRoutes = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Защищенный маршрут - только для авторизованных */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Маршрут авторизации - редирект на главную если уже авторизован */}
        <Route
          path="/auth"
          element={user ? <Navigate to="/" replace /> : <Auth />}
        />

        {/* Fallback для несуществующих маршрутов */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
