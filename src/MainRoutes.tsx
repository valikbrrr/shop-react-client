import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import ProtectedRoute from "./navigation/ProtectedRoute";
import { routes } from "./navigation/routes.const";
export const MainRoutes = () => {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Автоматически генерируем маршруты из конфигурации */}
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={
              route.name === "Auth" ? (
                // Для страницы авторизации - особый случай
                user ? (
                  <Navigate to="/" replace />
                ) : (
                  <route.component />
                )
              ) : (
                // Для остальных страниц - защищаем
                <ProtectedRoute>
                  <route.component />
                </ProtectedRoute>
              )
            }
          />
        ))}

        {/* Fallback для несуществующих маршрутов */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
