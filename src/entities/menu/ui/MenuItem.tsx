import { Icon } from "@/shared/ui";
import type { IMenuItem } from "../model/menu.interface";

interface MenuItemProps {
  item: IMenuItem;
  isActive?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  item,
  isActive = false,
}) => {
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
    </div>
  );
};
