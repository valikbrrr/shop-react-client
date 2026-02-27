import { Icon } from "@/shared/ui";
import type { IMenuItem } from "./menu.interface";

interface MenuItemProps {
  item: IMenuItem;
  isActive?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item, isActive = false }) => {
  return (
    <div className="flex flex-col items-center justify-center px-2 pt-3 pb-2">
      {/* Иконка с анимацией */}
      <Icon
        name={item.icon}
        size={22}
        className={`transition-all duration-200 ${
          isActive
            ? "text-blue-600 scale-110"
            : "text-gray-500 hover:text-gray-700"
        }`}
      />

      {/* Текст под иконкой */}
      <span
        className={`text-xs mt-1 transition-all duration-200 ${
          isActive ? "text-blue-600 font-semibold" : "text-gray-600"
        }`}
      >
        {item.title}
      </span>

      {/* Индикатор активного состояния */}
      {isActive && (
        <div className="w-1 h-1 bg-blue-600 rounded-full mt-0.5"></div>
      )}
    </div>
  );
};
