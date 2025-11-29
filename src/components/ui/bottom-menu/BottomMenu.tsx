// src/components/ui/bottom-menu/BottomMenu.tsx
import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./menu.data";
import MenuItem from "./MenuItem";
import { routes } from "@/navigation/routes.const";

const BottomMenu = () => {
  const location = useLocation();

  // Функция для получения реального пути по имени маршрута
  const getPathByName = (routeName: string) => {
    const route = routes.find((r) => r.name === routeName);
    console.log(route?.path);
    return route?.path || "/";
  };

  return (
    <nav className="bottom-menu">
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={getPathByName(item.path)}
          className={
            location.pathname === getPathByName(item.path) ? "active" : ""
          }
        >
          <MenuItem item={item} />
        </Link>
      ))}
    </nav>
  );
};

export default BottomMenu;
