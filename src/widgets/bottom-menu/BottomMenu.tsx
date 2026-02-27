import { Link, useLocation } from "react-router-dom";
import { menuItems } from "./menu.data";
import { MenuItem } from "./MenuItem";
import { routes } from "@/shared";

export const BottomMenu = () => {
  const location = useLocation();

  const getPathByName = (routeName: string) => {
    const route = routes.find((r) => r.name === routeName);
    return route?.path || "/";
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex">
        {menuItems.map((item) => {
          const path = getPathByName(item.path);
          const isActive = location.pathname === path;

          return (
            <Link key={item.path} to={path} className="flex-1">
              <MenuItem item={item} isActive={isActive} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
